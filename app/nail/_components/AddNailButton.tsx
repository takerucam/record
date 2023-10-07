'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import { GelTypes } from '@/app/_types/supabase'
import AddNailModal from '@/app/nail/_components/AddNailModal'
import Add from '@/public/icons/add.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function AddNailButton({
  gelTypes,
}: {
  gelTypes: GelTypes[] | null
}) {
  const [isOpen, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={isOpen} onClose={close} title="ネイル追加" centered>
        <AddNailModal gelTypes={gelTypes} />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Add width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-pink9"
        />
      </button>
    </>
  )
}
