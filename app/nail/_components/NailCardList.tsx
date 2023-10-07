import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import AddNailButton from '@/app/nail/_components/AddNailButton'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function NailCardList({
  body,
}: {
  body: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: gelTypes } = await supabase.from('GelTypes').select()
  return (
    <div className="border-pink7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <AddNailButton gelTypes={gelTypes} />
      </div>
      <RecordListFooter />
    </div>
  )
}
