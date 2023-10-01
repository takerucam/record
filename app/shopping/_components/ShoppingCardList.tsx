import CircleButton from '@/app/_components/common/CircleButton'
import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import Add from '@/public/icons/add.svg'

export default function ShoppingCardList({ body }: { body: React.ReactNode }) {
  return (
    <div className="border-grass7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <CircleButton
          svg={<Add width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-grass9"
        />
      </div>
      <RecordListFooter />
    </div>
  )
}
