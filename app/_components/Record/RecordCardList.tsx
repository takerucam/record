import AddCustomerButton from '@/app/_components/Customer/AddCustomerButton'
import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import AddRecordButton from '@/app/[id]/[recordId]/_component/AddRecordButton'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function RecordCardList({
  body,
  isRecord = false,
}: {
  body: React.ReactNode
  isRecord?: boolean
}) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: colorTypes } = await supabase.from('ColorTypes').select()
  const { data: gelTypes } = await supabase.from('GelTypes').select()
  const { data: merchandise } = await supabase.from('Merchandise').select()

  return (
    <div className="border-cyan7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        {isRecord ? (
          <AddRecordButton
            colorTypes={colorTypes}
            gelTypes={gelTypes}
            merchandise={merchandise}
          />
        ) : (
          <AddCustomerButton />
        )}
      </div>
      <RecordListFooter />
    </div>
  )
}
