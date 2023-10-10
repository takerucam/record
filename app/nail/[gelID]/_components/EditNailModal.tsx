'use client'

import { GelTypes } from '@/app/_types/supabase'
import supabase from '@/utils/supabase'
import { Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export default function EditNailModal({ gelType }: { gelType: GelTypes }) {
  const form = useForm({
    initialValues: {
      name: gelType.name,
      price: gelType.price.toString(),
    },
    validate: {
      name: (value) =>
        value.trim().length > 0 ? null : '名前を入力してください',
      price: (value) => (/^\d+$/.test(value) ? null : '数字を入力してください'),
    },
  })

  async function updateGelType(values: { name: string; price: string }) {
    const { error } = await supabase
      .from('GelTypes')
      .update({
        name: values.name,
        price: parseInt(values.price),
      })
      .eq('id', gelType.id)
    if (error) {
      console.log(error)
    }
    window.location.reload()
  }

  return (
    <form
      onSubmit={form.onSubmit(async (values) => await updateGelType(values))}
    >
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="ネイル名"
        placeholder="クリストリオ"
        {...form.getInputProps('name')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="料金"
        placeholder="1000"
        {...form.getInputProps('price')}
      />
      <Group justify="flex-end" mt="xl">
        <button type="submit" className="text-lg">
          更新
        </button>
      </Group>
    </form>
  )
}
