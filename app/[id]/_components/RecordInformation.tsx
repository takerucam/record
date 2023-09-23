import CircleButton from '@/app/_components/CircleButton'
import RecordInformationTable from '@/app/[id]/_components/RecordInformationTable'
import PersonEdit from '@/public/icons/person_edit.svg'

export default async function RecordInformation({
  recordId,
}: {
  recordId: string
}) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<PersonEdit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </div>
      <RecordInformationTable recordId={recordId} />
    </div>
  )
}
