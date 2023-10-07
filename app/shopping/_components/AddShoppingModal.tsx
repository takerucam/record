'use client'

import supabase from '@/utils/supabase'
import { Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/navigation'

export default function AddColorModal() {
  const router = useRouter()

  const form = useForm({
    initialValues: {
      name: '',
      price: '',
    },
    validate: {
      name: (value) => (value.length > 0 ? null : '入力してください'),
      price: (value) => (/^\d+$/.test(value) ? null : '数字を入力してください'),
    },
  })

  async function insertCustomer(values: { name: string; price: string }) {
    console.log(values)
    const { data } = await supabase.auth.getUser()
    const { error } = await supabase.from('Merchandise').insert({
      name: values.name,
      price: parseInt(values.price),
      user_id: data.user?.id,
    })
    if (error) {
      console.log(error)
    }
    form.reset()
    router.refresh()
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
        label="商品名"
        placeholder="桑の葉美"
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
      <Group justify="flex-end" mt="xl">
        <button type="submit" className="text-lg">
          登録
        </button>
      </Group>
    </form>
  )
}
