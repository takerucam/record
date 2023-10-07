import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import AddColorButton from '@/app/color/_components/AddColorButton'

export default async function NailCardList({
  body,
}: {
  body: React.ReactNode
}) {
  return (
    <div className="border-amber7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <AddColorButton />
      </div>
      <RecordListFooter />
    </div>
  )
}
