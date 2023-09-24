import BaseLayout from '@/app/_components/common/BaseLayout'
import ShoppingCardList from '@/app/shopping/_components/ShoppingCardList'
import ShoppingListBody from '@/app/shopping/_components/ShoppingListBody'

export default function ShoppingRootPage() {
  const body = <ShoppingListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout recordCardList={<ShoppingCardList body={body} />} />
    </main>
  )
}
