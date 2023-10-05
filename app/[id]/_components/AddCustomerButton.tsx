'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import AddCustomerModal from '@/app/[id]/_components/AddCustomerModal'
import Add from '@/public/icons/add.svg'
import useStore from '@/store'
import supabase from '@/utils/supabase'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function AddCustomerButton({ style }: { style?: string }) {
  const [isOpen, { open, close }] = useDisclosure(false)
  const router = useRouter()
  const { editedCustomer } = useStore()
  const reset = useStore((state) => state.resetEditedCustomer)

  async function onSubmitHandler(e: FormEvent<HTMLFormControlsCollection>) {
    e.preventDefault()
    const { error } = await supabase.from('CustomerList').insert({
      address: editedCustomer.address,
      birthday: editedCustomer.birthday,
      id: editedCustomer.id,
      memo: editedCustomer.memo,
      name: editedCustomer.name,
      number: editedCustomer.phone_number,
    })
    router.refresh()
    reset()
  }
  return (
    <>
      <Modal
        size={500}
        opened={isOpen}
        onClose={close}
        title="顧客追加"
        centered
      >
        <AddCustomerModal />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Add width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
          style={style}
        />
      </button>
    </>
  )
}
