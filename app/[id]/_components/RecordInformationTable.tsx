import RecordInformationTableItem from '@/app/[id]/_components/RecordInformationTableItem'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import dayjs from 'dayjs'
import { cookies } from 'next/headers'

export default async function RecordInformationTable({
  recordId,
}: {
  recordId: string
}) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: records } = await supabase
    .from('CustomerRecordInformation')
    .select()
    .eq('id', recordId ?? '')
    .single()
  if (!records) return null
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
          text={`時間：${records.elapsed_time ?? ''}`}
          styles="time col-start-5 row-start-1 col-span-4"
        />
        <RecordInformationTableItem
          text={`前回の持ち具合：${records.previous_condition ?? ''}`}
          styles="lastStatus col-span-12 col-start-[9] row-start-1"
        />
        <RecordInformationTableItem
          text={dayjs(records.visit_date).format('YYYY')}
          styles="yearValue col-start-1 col-span-2 row-start-2"
        />
        <RecordInformationTableItem
          text={dayjs(records.visit_date).format('MM')}
          styles="monthValue col-star:t-3 row-start-2"
        />
        <RecordInformationTableItem
          text={dayjs(records.visit_date).format('DD')}
          styles="dayValue col-start-4 row-start-2"
        />
        <RecordInformationTableItem
          text={`フィル× ${records.fill}`}
          styles="fill col-start-5 col-span-4 row-start-2"
        />
        <RecordInformationTableItem
          text={`プライマー：${records.primer ? '有' : '無'}`}
          styles="primer col-start-[9] col-span-12 row-start-2"
        />
        <RecordInformationTableItem
          text={`周期：${records.cycle}`}
          styles="cycle col-span-4 col-start-1 row-start-3"
        />
        <RecordInformationTableItem
          text="使用ジェル"
          styles="gel col-span-16 col-start-5 row-start-3"
        />
        <RecordInformationTableItem
          text={records.target ?? ''}
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
