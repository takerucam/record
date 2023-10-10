'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import { Merchandise } from '@/app/_types/supabase'
import EditShoppingModal from '@/app/shopping/[shoppingId]/_components/EditShoppingModal'
import Edit from '@/public/icons/edit.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function EditShoppingButton({
  merchandise,
}: {
  merchandise: Merchandise
}) {
  const [isOpen, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={isOpen} onClose={close} title="顧客情報編集" centered>
        <EditShoppingModal merchandise={merchandise} />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-grass9"
        />
      </button>
    </>
  )
}
