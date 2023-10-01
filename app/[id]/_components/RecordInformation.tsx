import CircleButton from '@/app/_components/common/CircleButton'
import RecordInformationTable from '@/app/[id]/_components/RecordInformationTable'
import Edit from '@/public/icons/edit.svg'

export default async function RecordInformation({
  recordId,
}: {
  recordId: string
}) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </div>
      <RecordInformationTable recordId={recordId} />
    </div>
  )
}
