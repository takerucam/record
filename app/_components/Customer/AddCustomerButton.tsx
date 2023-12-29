'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import AddCustomerModal from '@/app/_components/Customer/AddCustomerModal'
import Add from '@/public/icons/add.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function AddCustomerButton({ style }: { style?: string }) {
  const [isOpen, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={isOpen} onClose={close} title="顧客追加" centered>
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
