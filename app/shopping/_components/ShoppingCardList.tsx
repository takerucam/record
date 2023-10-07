import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import AddShoppingButton from '@/app/shopping/_components/AddShoppingButton'

export default function ShoppingCardList({ body }: { body: React.ReactNode }) {
  return (
    <div className="border-grass7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <AddShoppingButton />
      </div>
      <RecordListFooter />
    </div>
  )
}
