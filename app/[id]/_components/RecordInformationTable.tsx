import { Finger } from '@/app/_types/supabase'
import RecordInformationFingerItem from '@/app/[id]/_components/RecordInformationFingerItem'
import RecordInformationTableItem from '@/app/[id]/_components/RecordInformationTableItem'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import dayjs from 'dayjs'
import { cookies } from 'next/headers'

function getFingersInfo(fingers: Finger[] | null) {
  const leftThumb = fingers?.find(
    (finger) => finger.finger_name === 'leftThumb'
  )
  const leftIndexFinger = fingers?.find(
    (finger) => finger.finger_name === 'leftIndexFinger'
  )
  const leftMiddleFinger = fingers?.find(
    (finger) => finger.finger_name === 'leftMiddleFinger'
  )
  const leftRingFinger = fingers?.find(
    (finger) => finger.finger_name === 'leftRingFinger'
  )
  const leftLittleFinger = fingers?.find(
    (finger) => finger.finger_name === 'leftLittleFinger'
  )
  const rightThumb = fingers?.find(
    (finger) => finger.finger_name === 'rightThumb'
  )
  const rightIndexFinger = fingers?.find(
    (finger) => finger.finger_name === 'rightIndexFinger'
  )
  const rightMiddleFinger = fingers?.find(
    (finger) => finger.finger_name === 'rightMiddleFinger'
  )
  const rightRingFinger = fingers?.find(
    (finger) => finger.finger_name === 'rightRingFinger'
  )
  const rightLittleFinger = fingers?.find(
    (finger) => finger.finger_name === 'rightLittleFinger'
  )

  return fingers
    ? {
        leftThumb: leftThumb,
        leftIndexFinger: leftIndexFinger,
        leftMiddleFinger: leftMiddleFinger,
        leftRingFinger: leftRingFinger,
        leftLittleFinger: leftLittleFinger,
        rightThumb: rightThumb,
        rightIndexFinger: rightIndexFinger,
        rightMiddleFinger: rightMiddleFinger,
        rightRingFinger: rightRingFinger,
        rightLittleFinger: rightLittleFinger,
      }
    : null
}

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

  const { data: baseGels } = await supabase
    .from('CustomerBaseGel')
    .select()
    .eq('record_id', recordId ?? '')

  const { data: topGels } = await supabase
    .from('CustomerTopGel')
    .select()
    .eq('record_id', recordId ?? '')

  const { data: colors } = await supabase
    .from('CustomerColor')
    .select()
    .eq('record_id', recordId ?? '')

  const { data: designs } = await supabase
    .from('Design')
    .select()
    .eq('record_id', recordId ?? '')

  const { data: merchandises } = await supabase
    .from('CustomerMerchandise')
    .select()
    .eq('record_id', recordId ?? '')

  const { data: fingers } = await supabase
    .from('FingerInformation')
    .select()
    .eq('record_id', recordId ?? '')

  const fingerObj = getFingersInfo(fingers)

  console.log(fingerObj)

  return (
    <div className="flex h-screen items-center">
      <div className="bg-gray border-gray grid-cols-20 grid grow gap-px border">
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
          styles="monthValue col-start-3 row-start-2"
        />
        <RecordInformationTableItem
          text={dayjs(records.visit_date).format('D')}
          styles="dayValue col-start-4 row-start-2"
        />
        <RecordInformationTableItem
          text={`フィル× ${records.fill}`}
          styles="fill col-start-5 col-span-4 row-start-2"
        />
        <RecordInformationTableItem
          text={`プライマー：${records.primer ? '有' : '無'}`}
          styles="primer col-start-9 col-span-12 row-start-2"
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

        {/* 指情報 */}
        <RecordInformationFingerItem
          text="右手"
          styles="lt col-span-2 row-start-6 col-start-1"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="li col-span-2 row-start-6 col-start-3"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="lm col-span-2 row-start-6 col-start-5"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="lr col-span-2 row-start-6 col-start-7"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="ll col-span-2 row-start-6 col-start-9"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="rt col-span-2 row-start-6 col-start-11"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="ri col-span-2 row-start-6 col-start-13"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="rm col-span-2 row-start-6 col-start-15"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="rr col-span-2 row-start-6 col-start-17"
        />
        <RecordInformationFingerItem
          text="右手"
          styles="rl col-span-2 row-start-6 col-start-19"
        />
      </div>
    </div>
  )
}
