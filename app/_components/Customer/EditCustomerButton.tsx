'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import EditCustomerModal from '@/app/_components/Customer/EditCustomerModal'
import { CustomerList } from '@/app/_types/supabase'
import Edit from '@/public/icons/edit.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function EditCustomerButton({
  customer,
}: {
  customer: CustomerList
}) {
  const [isOpen, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={isOpen} onClose={close} title="顧客情報編集" centered>
        <EditCustomerModal customer={customer} />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </button>
    </>
  )
}
