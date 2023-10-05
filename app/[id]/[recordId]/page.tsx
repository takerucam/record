import BaseLayout from '@/app/_components/common/BaseLayout'
import RecordCardList from '@/app/_components/Record/RecordCardList'
import RecordInformation from '@/app/[id]/_components/RecordInformation'
import RecordListBody from '@/app/[id]/_components/RecordListBody'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function RecordPage({
  params,
}: {
  params: { id: string; recordId: string }
}) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: customerInfo } = await supabase
    .from('CustomerList')
    .select()
    .eq('id', params.id ?? '')
  if (!customerInfo) return null
  console.log(customerInfo)
  const body = <RecordListBody user={customerInfo[0]} />

  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<RecordCardList body={body} />}
        customerInformation={
          params.recordId == '0' ? null : (
            <RecordInformation recordId={params.recordId} />
          )
        }
      />
    </main>
  )
}
