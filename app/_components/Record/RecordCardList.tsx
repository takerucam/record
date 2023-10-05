import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import AddCustomerButton from '@/app/[id]/_components/AddCustomerButton'

export default function RecordCardList({ body }: { body: React.ReactNode }) {
  return (
    <div className="border-cyan7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <AddCustomerButton />
      </div>
      <RecordListFooter />
    </div>
  )
}
