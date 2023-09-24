import CircleButton from '@/app/_components/common/CircleButton'
import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import ShoppingCartAdd from '@/public/icons/shopping_cart_add.svg'

export default function ShoppingCardList({ body }: { body: React.ReactNode }) {
  return (
    <div className="border-grass7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <CircleButton
          svg={<ShoppingCartAdd width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-grass9"
        />
      </div>
      <RecordListFooter />
    </div>
  )
}
