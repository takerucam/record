import CircleButton from '@/app/_components/CircleButton'
import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import PersonAdd from '@/public/icons/person_add.svg'

export default function RecordCardList({ body }: { body: React.ReactNode }) {
  return (
    <div className="border-cyan7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <CircleButton
          svg={<PersonAdd width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </div>
      <RecordListFooter />
    </div>
  )
}
