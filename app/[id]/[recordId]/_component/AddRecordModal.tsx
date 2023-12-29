'use client'

import { ColorTypes, GelTypes, Merchandise } from '@/app/_types/supabase'
import supabase from '@/utils/supabase'
import {
  Group,
  MultiSelect,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import { usePathname } from 'next/navigation'

export default function AddRecordModal({
  colorTypes,
  gelTypes,
  merchandise,
}: {
  colorTypes: ColorTypes[] | null
  gelTypes: GelTypes[] | null
  merchandise: Merchandise[] | null
}) {
  const pathname = usePathname()
  const customerId = pathname.split('/')[1]

  const form = useForm({
    initialValues: {
      visitDate: dayjs().format('YYYY-MM-DD'),
      elapsedTime: 0,
      previousCondition: '',
      fill: 0,
      primer: '',
      cycle: 0,
      gel: [],
      target: '',
      color: [],
      design1: '',
      designFee1: 0,
      design2: '',
      designFee2: 0,
      design3: '',
      designFee3: 0,
      merchandise: [],
      treatmentContent: '',
      totalFee: 0,
      conversationContent: '',
      others: '',
      desiredDesign: '',
      rightThumb: '',
      rightIndexFinger: '',
      rightMiddleFinger: '',
      rightRingFinger: '',
      rightLittleFinger: '',
      leftThumb: '',
      leftIndexFinger: '',
      leftMiddleFinger: '',
      leftRingFinger: '',
      leftLittleFinger: '',
      usedCoupon: '',
    },
    validate: {
      visitDate: (value) =>
        /^\d{4}-\d{2}-\d{2}$/.test(value)
          ? null
          : '正しい日付を入力してください',
      elapsedTime: (value) => (value ? null : '数字を入力してください'),
      fill: (value) => (value ? null : '数字を入力してください'),
      primer: (value) => (value ? null : '有または無を入力してください'),
      cycle: (value) => (value ? null : '数字を入力してください'),
      totalFee: (value) => (value ? null : '数字を入力してください'),
      usedCoupon: (value) => (value ? null : 'どちらか選択してください'),
    },
  })

  const colorComboboxData =
    colorTypes?.map((color) => {
      return {
        value: color.id,
        label: color.name,
      }
    }) ?? []

  const gelComboboxData =
    gelTypes?.map((gel) => {
      return {
        value: gel.id,
        label: `${gel.name}（${gel.target}）`,
      }
    }) ?? []

  const merchandiseComboboxData =
    merchandise?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      }
    }) ?? []

  async function insertRecord(values: {
    visitDate: string
    elapsedTime: number
    previousCondition: string
    fill: number
    primer: string
    cycle: number
    gel: string[]
    target: string
    color: string[]
    design1: string
    designFee1: number
    design2: string
    designFee2: number
    design3: string
    designFee3: number
    merchandise: string[]
    treatmentContent: string
    totalFee: number
    conversationContent: string
    others: string
    desiredDesign: string
    rightThumb: string
    rightIndexFinger: string
    rightMiddleFinger: string
    rightRingFinger: string
    rightLittleFinger: string
    leftThumb: string
    leftIndexFinger: string
    leftMiddleFinger: string
    leftRingFinger: string
    leftLittleFinger: string
    usedCoupon: string
  }) {
    // ログインユーザー情報取得
    const { data } = await supabase.auth.getUser()

    // CustomerRecordInformationテーブルに挿入
    const { data: record, error } = await supabase
      .from('CustomerRecordInformation')
      .insert({
        customer_id: customerId,
        visit_date: values.visitDate,
        elapsed_time: values.elapsedTime,
        previous_condition: values.previousCondition,
        fill: values.fill,
        primer: values.primer === '有' ? true : false,
        cycle: values.cycle,
        target: values.target,
        treatment_content: values.treatmentContent,
        design_fee: 0,
        total_fee: values.totalFee,
        conversation_content: values.conversationContent,
        others: values.others,
        desired_design: values.desiredDesign,
        used_coupon: values.usedCoupon === 'はい' ? true : false,
        user_id: data.user?.id,
      })
      .select()
      .single()
    if (error) {
      console.log(error)
    }
    // TODO: recordがnullの場合のエラーハンドリング
    if (!record) return null

    // 中間：CustomerBaseGelテーブルに挿入
    const selectedBaseGels = gelTypes?.filter((gel) =>
      values.gel.some((gel2) => gel2 === gel.id && gel.target === 'base')
    )
    selectedBaseGels?.forEach(async (gel) => {
      const { error } = await supabase.from('CustomerBaseGel').insert({
        gel_id: gel.id,
        record_id: record.id,
        user_id: data.user?.id,
      })
      if (error) {
        console.log(error)
      }
    })

    // 中間：CustomerTopGelテーブルに挿入
    const selectedTopGels = gelTypes?.filter((gel) =>
      values.gel.some((gel2) => gel2 === gel.id && gel.target === 'top')
    )
    selectedTopGels?.forEach(async (gel) => {
      const { error } = await supabase.from('CustomerTopGel').insert({
        gel_id: gel.id,
        record_id: record.id,
        user_id: data.user?.id,
      })
      if (error) {
        console.log(error)
      }
    })

    // 中間：CustomerColorテーブルに挿入
    values.color.forEach(async (color) => {
      const { error } = await supabase.from('CustomerColor').insert({
        color_id: color,
        record_id: record.id,
        user_id: data.user?.id,
      })
      if (error) {
        console.log(error)
      }
    })

    // Designテーブルに挿入
    const designs = [
      { name: values.design1, price: values.designFee1 },
      { name: values.design2, price: values.designFee2 },
      { name: values.design3, price: values.designFee3 },
    ]
    designs.forEach(async (design) => {
      const { error } = await supabase.from('Design').insert({
        name: design.name,
        price: design.price,
        record_id: record.id,
        user_id: data.user?.id,
      })
      if (error) {
        console.log(error)
      }
    })

    // 中間：CustomerMerchandiseテーブルに挿入
    values.merchandise.forEach(async (merchandise) => {
      const { error } = await supabase.from('CustomerMerchandise').insert({
        merchandise_id: merchandise,
        record_id: record.id,
        user_id: data.user?.id,
      })
      if (error) {
        console.log(error)
      }
    })

    // 中間：FingerInformationテーブルに挿入
    const fingers = [
      { fingerName: 'rightThumb', nailType: values.rightThumb },
      { fingerName: 'rightIndexFinger', nailType: values.rightIndexFinger },
      { fingerName: 'rightMiddleFinger', nailType: values.rightMiddleFinger },
      { fingerName: 'rightRingFinger', nailType: values.rightRingFinger },
      { fingerName: 'rightLittleFinger', nailType: values.rightLittleFinger },
      { fingerName: 'leftThumb', nailType: values.leftThumb },
      { fingerName: 'leftIndexFinger', nailType: values.leftIndexFinger },
      { fingerName: 'leftMiddleFinger', nailType: values.leftMiddleFinger },
      { fingerName: 'leftRingFinger', nailType: values.leftRingFinger },
      { fingerName: 'leftLittleFinger', nailType: values.leftLittleFinger },
    ]
    fingers.forEach(async (finger) => {
      if (finger.nailType) {
        const { error } = await supabase.from('FingerInformation').insert({
          finger_name: finger.fingerName,
          nail_type: finger.nailType,
          record_id: record.id,
          user_id: data.user?.id,
        })
        if (error) {
          console.log(error)
        }
      }
    })
  }

  return (
    <form onSubmit={form.onSubmit(async (values) => insertRecord(values))}>
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="日付"
        placeholder="1970-01-01"
        {...form.getInputProps('visitDate')}
      />
      <NumberInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="かかった時間"
        placeholder="1.5"
        {...form.getInputProps('elapsedTime')}
      />
      <NumberInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="フィル"
        placeholder="3"
        {...form.getInputProps('fill')}
      />
      <Select
        size="lg"
        className="mb-4"
        withAsterisk
        label="プライマー"
        placeholder="有"
        data={['有', '無']}
        {...form.getInputProps('primer')}
      />
      <NumberInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="周期"
        placeholder="5"
        {...form.getInputProps('cycle')}
      />
      <MultiSelect
        size="lg"
        className="mb-4"
        label="使用ジェル"
        placeholder="ジェル選択"
        data={gelComboboxData}
        {...form.getInputProps('gel')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="Hand or Foot"
        placeholder="Hand"
        {...form.getInputProps('target')}
      />
      <MultiSelect
        size="lg"
        className="mb-4"
        label="使用カラー"
        placeholder="カラー選択"
        data={colorComboboxData}
        {...form.getInputProps('color')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="施術1"
        placeholder="ワンカラー"
        {...form.getInputProps('design1')}
      />
      <NumberInput
        size="lg"
        className="mb-4"
        label="施術1 料金"
        placeholder="料金を入力してください"
        {...form.getInputProps('designFee1')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="施術2"
        placeholder="ワンカラー"
        {...form.getInputProps('design2')}
      />
      <NumberInput
        size="lg"
        className="mb-4"
        label="施術2 料金"
        placeholder="料金を入力してください"
        {...form.getInputProps('designFee2')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="施術3"
        placeholder="ワンカラー"
        {...form.getInputProps('design3')}
      />
      <NumberInput
        size="lg"
        className="mb-4"
        label="施術3 料金"
        placeholder="料金を入力してください"
        {...form.getInputProps('designFee3')}
      />
      <MultiSelect
        size="lg"
        className="mb-4"
        label="購入物販"
        placeholder="物販を選択"
        data={merchandiseComboboxData}
        {...form.getInputProps('merchandise')}
      />
      {/* 指情報 */}
      {/* 右手 */}
      <TextInput
        size="lg"
        className="mb-4"
        label="右手親指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('rightThumb')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="右手人差し指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('rightIndexFinger')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="右手中指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('rightMiddleFinger')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="右手薬指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('rightRingFinger')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="右手小指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('rightLittleFinger')}
      />
      {/* 左手 */}
      <TextInput
        size="lg"
        className="mb-4"
        label="左手親指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('leftThumb')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="左手人差し指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('leftIndexFinger')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="左手中指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('leftMiddleFinger')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="左手薬指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('leftRingFinger')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="左手小指"
        placeholder="施術内容を入力してください"
        {...form.getInputProps('leftLittleFinger')}
      />
      {/* 合計金額 */}
      <NumberInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="合計金額"
        placeholder="料金を入力してください"
        {...form.getInputProps('totalFee')}
      />
      <Select
        size="lg"
        className="mb-4"
        withAsterisk
        label="クーポンを使ったかどうか"
        placeholder="選択してください"
        data={['はい', 'いいえ']}
        {...form.getInputProps('usedCoupon')}
      />
      <Textarea
        size="lg"
        className="mb-4"
        label="施術内容"
        placeholder="メモ"
        {...form.getInputProps('treatmentContent')}
      />
      <Group justify="flex-end" mt="xl">
        <button type="submit" className="text-lg">
          登録
        </button>
      </Group>
    </form>
  )
}
