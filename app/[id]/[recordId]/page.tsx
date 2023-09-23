import BaseLayout from '@/app/_components/common/BaseLayout'
import RecordCardList from '@/app/_components/Record/RecordCardList'
import RecordInformation from '@/app/[id]/_components/RecordInformation'
import RecordListBody from '@/app/[id]/_components/RecordListBody'
import { Database } from '@/libs/database.types'

type CustomerList = Database['public']['Tables']['CustomerList']['Row']

async function fetchCustomerInfo(id: string) {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/CustomerList?customer_id=eq.${id}`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const data: CustomerList[] = await res.json()
  return data[0]
}

export default async function RecordPage({
  params,
}: {
  params: { id: string; recordId: string }
}) {
  const customerInfo = await fetchCustomerInfo(params.id)
  const body = <RecordListBody user={customerInfo} />

  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<RecordCardList body={body} />}
        customerInformation={<RecordInformation recordId={params.recordId} />}
      />
    </main>
  )
}
