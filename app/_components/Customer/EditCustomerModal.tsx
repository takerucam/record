'use client'

import { CustomerList } from '@/app/_types/supabase'
import supabase from '@/utils/supabase'
import { Group, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export default function EditCustomerModal({
  customer,
}: {
  customer: CustomerList
}) {
  const form = useForm({
    initialValues: {
      customerId: customer.customer_id,
      name: customer.name,
      birthday: customer.birthday ? customer.birthday : '',
      phoneNumber: customer.phone_number ? customer.phone_number : '',
      address: customer.address ? customer.address : '',
      memo: customer.memo ? customer.memo : '',
    },
    validate: {
      name: (value) =>
        value.trim().length > 0 ? null : '名前を入力してください',
      birthday: (value) =>
        value
          ? /^\d{4}-\d{2}-\d{2}$/.test(value)
            ? null
            : '正しい誕生日を入力してください'
          : null,
    },
  })

  async function updateCustomer(values: {
    customerId: number
    name: string
    birthday: string
    phoneNumber: string
    address: string
    memo: string
  }) {
    const { error } = await supabase
      .from('CustomerList')
      .update({
        customer_id: values.customerId,
        name: values.name,
        birthday:
          values.birthday && values.birthday.length > 0
            ? values.birthday
            : null,
        phone_number:
          values.phoneNumber && values.phoneNumber.length > 0
            ? values.phoneNumber
            : null,
        address:
          values.address && values.address.length > 0 ? values.address : null,
        memo: values.memo && values.memo.length > 0 ? values.memo : null,
      })
      .eq('id', customer.id)
    if (error) {
      console.log(error)
    }
    form.reset()
    window.location.reload()
  }

  return (
    <form
      onSubmit={form.onSubmit(async (values) => await updateCustomer(values))}
    >
      <TextInput
        size="lg"
        className="mb-4"
        withAsterisk
        label="No"
        placeholder="1"
        {...form.getInputProps('customerId')}
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
        label="誕生日"
        placeholder="1970-01-01"
        {...form.getInputProps('birthday')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="連絡先"
        placeholder="1245-1234-1234"
        {...form.getInputProps('phoneNumber')}
      />
      <TextInput
        size="lg"
        className="mb-4"
        label="住所"
        placeholder="福井県"
        {...form.getInputProps('address')}
      />
      <Textarea
        size="lg"
        className="mb-4"
        label="メモ"
        placeholder="メモ"
        {...form.getInputProps('memo')}
      />
      <Group justify="flex-end" mt="xl">
        <button type="submit" className="text-lg">
          更新
        </button>
      </Group>
    </form>
  )
}
