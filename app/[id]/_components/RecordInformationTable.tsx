import RecordInformationTableItem from '@/app/[id]/_components/RecordInformationTableItem'
import { Database } from '@/libs/database.types'
import dayjs from 'dayjs'

type CustomerRecordInformation =
  Database['public']['Tables']['CustomerRecordInformation']['Row']

async function fetchCustomerInfo(recordId: string) {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/CustomerRecordInformation?id=eq.${recordId}`,
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
  return data[0]
}

export default async function RecordInformationTable({
  recordId,
}: {
  recordId: string
}) {
  const data = await fetchCustomerInfo(recordId)
  return (
    <div className="flex h-screen items-center">
      <div className="record grid-cols-20 bg-gray border-gray grid grow grid-rows-1 gap-px border">
        <RecordInformationTableItem
          text="年"
          styles="year col-start-1 row-start-1 col-span-2"
        />
        <RecordInformationTableItem
          text="月"
          styles="month col-start-3 row-start-1"
        />
        <RecordInformationTableItem
          text="日"
          styles="day col-start-4 row-start-1"
        />
        <RecordInformationTableItem
          text={`時間：${data?.elapsed_time ?? ''}`}
          styles="time col-start-5 row-start-1 col-span-4"
        />
        <RecordInformationTableItem
          text={`前回の持ち具合：${data?.previous_condition ?? ''}`}
          styles="lastStatus col-span-12 col-start-[9] row-start-1"
        />
        <RecordInformationTableItem
          text={data ? dayjs(data.visit_date).format('YYYY') : ''}
          styles="yearValue col-start-1 col-span-2 row-start-2"
        />
        <RecordInformationTableItem
          text={data ? dayjs(data.visit_date).format('MM') : ''}
          styles="monthValue col-star:t-3 row-start-2"
        />
        <RecordInformationTableItem
          text={data ? dayjs(data?.visit_date).format('DD') : ''}
          styles="dayValue col-start-4 row-start-2"
        />
        <RecordInformationTableItem
          text={`フィル× ${data?.fill ?? ''}`}
          styles="fill col-start-5 col-span-4 row-start-2"
        />
        <RecordInformationTableItem
          text={`プライマー：${data?.primer ? '有' : '無'}`}
          styles="primer col-start-[9] col-span-12 row-start-2"
        />
        <RecordInformationTableItem
          text={`周期：${data?.cycle ?? ''}`}
          styles="cycle col-span-4 col-start-1 row-start-3"
        />
        <RecordInformationTableItem
          text="使用ジェル"
          styles="gel col-span-16 col-start-5 row-start-3"
        />
        <RecordInformationTableItem
          text={data?.target ?? ''}
          styles="hand col-span-4 col-start-1 row-start-4"
        />
        <RecordInformationTableItem
          text="カラー"
          styles="color col-start-5 row-start-4 col-span-16"
        />
        <RecordInformationTableItem
          text="ワン"
          styles="option col-span-10 col-start-1 row-start-5"
        />
        <RecordInformationTableItem
          text="料金"
          styles="fee col-start-11 row-start-5 col-span-5"
        />
        <RecordInformationTableItem
          text="物販"
          styles="saleItem col-start-16 row-start-5 col-span-5"
        />
      </div>
    </div>
  )
}
