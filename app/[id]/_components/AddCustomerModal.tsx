'use client'

import { Group, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export default function AddCustomerModal() {
  const form = useForm({
    initialValues: {
      name: '',
      number: '',
      birthday: '',
      address: '',
      memo: '',
    },
    validate: {
      name: (value) =>
        value.trim().length > 0 ? null : '名前を入力してください',
      number: (value) =>
        /^\d{2,4}-\d{2,4}-\d{3,4}$/.test(value) ? null : '無効な電話番号',
    },
  })
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        withAsterisk
        label="連絡先（電話番号）"
        placeholder="090-1234-5678"
        {...form.getInputProps('number')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
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
      <Group justify="flex-end" mt="md">
        <button type="submit">登録</button>
      </Group>
    </form>
  )
}
