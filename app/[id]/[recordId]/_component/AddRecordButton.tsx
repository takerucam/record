'use client'

import CircleButton from '@/app/_components/common/CircleButton'
import { ColorTypes, GelTypes, Merchandise } from '@/app/_types/supabase'
import AddRecordModal from '@/app/[id]/[recordId]/_component/AddRecordModal'
import Add from '@/public/icons/add.svg'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function AddRecordButton({
  colorTypes,
  gelTypes,
  merchandise,
}: {
  colorTypes: ColorTypes[] | null
  gelTypes: GelTypes[] | null
  merchandise: Merchandise[] | null
}) {
  const [isOpen, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={isOpen} onClose={close} title="カルテ追加" centered>
        <AddRecordModal
          colorTypes={colorTypes}
          gelTypes={gelTypes}
          merchandise={merchandise}
        />
      </Modal>
      <button onClick={open}>
        <CircleButton
          svg={<Add width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </button>
    </>
  )
}
