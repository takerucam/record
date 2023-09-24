import BaseLayout from '@/app/_components/common/BaseLayout'
import ShoppingCardList from '@/app/shopping/_components/ShoppingCardList'
import ShoppingListBody from '@/app/shopping/_components/ShoppingListBody'
import ShoppingInformation from '@/app/shopping/[shoppingId]/_components/ShoppingInformation'

export default function ShoppingDetailPage({
  params,
}: {
  params: { shoppingId: string }
}) {
  const body = <ShoppingListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<ShoppingCardList body={body} />}
        customerInformation={<ShoppingInformation id={params.shoppingId} />}
      />
    </main>
  )
}
