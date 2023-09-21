import RecordCard from '@/app/[id]/_components/RecordCard'
import { Database } from '@/libs/database.types'
import dayjs from 'dayjs'

type CustomerRecordInformation =
  Database['public']['Tables']['CustomerRecordInformation']['Row']
type CustomerList = Database['public']['Tables']['CustomerList']['Row']

async function fetchCustomerRecordInformation(id: number) {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/CustomerRecordInformation?customer_id=eq.${id}`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const data: CustomerRecordInformation[] = await res.json()
  return data
}

export default async function RecordListBody({ user }: { user: CustomerList }) {
  const records = await fetchCustomerRecordInformation(user.customer_id)

  return (
    <div className="flex flex-col items-center overflow-auto">
      <div className="flex w-[352px] items-center justify-between px-4 pb-12 pt-8">
        <p className="text-gray text-2xl font-bold">{`No.${user.customer_id}`}</p>
        <p className="text-gray text-2xl font-bold">{`${user.name} 様`}</p>
        <p className="text-gray text-2xl font-bold">{`${dayjs(
          user.birthday
        ).format('M月D日')}`}</p>
      </div>
      {records.map((record) => {
        return (
          <div key={record.id}>
            <RecordCard
              customerId={user.customer_id}
              id={record.id}
              date={dayjs(record.visit_date).format('YYYY年M月D日')}
              isBirthday={
                dayjs(user.birthday).month() ==
                  dayjs(record.visit_date).month() &&
                dayjs(user.birthday).date() == dayjs(record.visit_date).date()
              }
            />
          </div>
        )
      })}
    </div>
  )
}
