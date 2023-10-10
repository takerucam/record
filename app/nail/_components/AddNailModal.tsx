'use client'

import { GelTypes } from '@/app/_types/supabase'
import supabase from '@/utils/supabase'
import { Group, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export default function AddNailModal({
  gelTypes,
}: {
  gelTypes: GelTypes[] | null
}) {
  const uniqueTarget = gelTypes
    ?.filter(
      (value, index, self) =>
        self.findIndex((item) => item.target === value.target) === index
    )
    .map((v) => v.target)

  const form = useForm({
    initialValues: {
      name: '',
      price: '',
      target: uniqueTarget?.[0] ?? '',
    },
    validate: {
      name: (value) => (value.length > 0 ? null : '入力してください'),
      price: (value) => (/^\d+$/.test(value) ? null : '数字を入力してください'),
    },
  })

  async function insertCustomer(values: {
    name: string
    price: string
    target: string
  }) {
    console.log(values)
    const { data } = await supabase.auth.getUser()
    const { error } = await supabase.from('GelTypes').insert({
      name: values.name,
      price: parseInt(values.price),
      target: values.target,
      user_id: data.user?.id,
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
        label="ネイル名"
        placeholder="パラジェル"
        {...form.getInputProps('name')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="値段"
        placeholder="1"
        {...form.getInputProps('price')}
      />
      <Select
        size="lg"
        label="対象"
        data={uniqueTarget}
        defaultSearchValue={uniqueTarget?.[0]}
        {...form.getInputProps('target')}
      />
      <Group justify="flex-end" mt="xl">
        <button type="submit" className="text-lg">
          登録
        </button>
      </Group>
    </form>
  )
}
