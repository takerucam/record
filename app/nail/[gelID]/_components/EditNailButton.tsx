'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import { GelTypes } from '@/app/_types/supabase'
import EditNailModal from '@/app/nail/[gelID]/_components/EditNailModal'
import Edit from '@/public/icons/edit.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function EditNailButton({ gelType }: { gelType: GelTypes }) {
  const [isOpen, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={isOpen} onClose={close} title="顧客情報編集" centered>
        <EditNailModal gelType={gelType} />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-pink9"
        />
      </button>
    </>
  )
}
