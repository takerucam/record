import RecordCard from '@/app/[id]/[recordId]/_component/RecordCard'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import dayjs from 'dayjs'
import { cookies } from 'next/headers'

type CustomerList = Database['public']['Tables']['CustomerList']['Row']

export default async function RecordListBody({ user }: { user: CustomerList }) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const { data: records } = await supabase
    .from('CustomerRecordInformation')
    .select()
    .eq('customer_id', user.id ?? '')
    .order('visit_date', { ascending: false })

  if (!records) return null

  return (
    <div className="flex flex-col items-center overflow-auto">
      <div className="flex w-[352px] items-center px-4 pb-12 pt-8">
        <p className="text-gray pr-6 text-2xl font-bold">{`No.${user.customer_id}`}</p>
        <p className="text-gray text-2xl font-bold">{`${user.name} 様`}</p>
        {user.birthday ? (
          <p className="text-gray ml-auto text-2xl font-bold">{`${dayjs(
            user.birthday
          ).format('M月D日')}`}</p>
        ) : null}
      </div>
      {records.map((record) => {
        return (
          <div key={record.id}>
            <RecordCard
              customerId={user.id}
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
