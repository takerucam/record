'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import AddShoppingModal from '@/app/shopping/_components/AddShoppingModal'
import Add from '@/public/icons/add.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function AddColorButton() {
  const [isOpen, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={isOpen} onClose={close} title="ネイル追加" centered>
        <AddShoppingModal />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Add width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-grass9"
        />
      </button>
    </>
  )
}
