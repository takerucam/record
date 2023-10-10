'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import { ColorTypes } from '@/app/_types/supabase'
import EditColorModal from '@/app/color/[colorId]/_components/EditColorModal'
import Edit from '@/public/icons/edit.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function EditColorButton({
  colorType,
}: {
  colorType: ColorTypes
}) {
  const [isOpen, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={isOpen} onClose={close} title="顧客情報編集" centered>
        <EditColorModal colorType={colorType} />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-amber9"
        />
      </button>
    </>
  )
}
