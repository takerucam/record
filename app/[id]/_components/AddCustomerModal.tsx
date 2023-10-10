'use client'

import supabase from '@/utils/supabase'
import { Group, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export default function AddCustomerModal() {
  const form = useForm({
    initialValues: {
      number: '',
      name: '',
      phoneNumber: '',
      birthday: '',
      address: '',
      memo: '',
    },
    validate: {
      name: (value) =>
        value.trim().length > 0 ? null : '名前を入力してください',
      number: (value) =>
        /^\d+$/.test(value) ? null : '数字を入力してください',
    },
  })

  async function insertCustomer(values: {
    number: string
    name: string
    phoneNumber: string
    birthday: string
    address: string
    memo: string
  }) {
    const { data } = await supabase.auth.getUser()
    const { error } = await supabase.from('CustomerList').insert({
      name: values.name,
      user_id: data.user?.id,
      customer_id: parseInt(values.number),
    })
    if (error) {
      console.log(error)
    }
    form.reset()
    window.location.reload()
  }

  return (
    <form
      onSubmit={form.onSubmit(async (values) => await insertCustomer(values))}
    >
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="No"
        placeholder="1"
        {...form.getInputProps('number')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="名前"
        placeholder="福井太郎"
        {...form.getInputProps('name')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="連絡先（電話番号）"
        placeholder="090-1234-5678"
        {...form.getInputProps('phoneNumber')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="誕生日"
        placeholder="2021-01-01"
        {...form.getInputProps('birthday')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="住所"
        placeholder="福井県鯖江市"
        {...form.getInputProps('address')}
      />
      <Textarea
        size="lg"
        label="メモ"
        placeholder="あああ"
        {...form.getInputProps('memo')}
      />
      <Group justify="flex-end" mt="xl">
        <button type="submit" className="text-lg">
          登録
        </button>
      </Group>
    </form>
  )
}
