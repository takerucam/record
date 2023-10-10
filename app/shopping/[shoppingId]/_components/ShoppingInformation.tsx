import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import EditShoppingButton from '@/app/shopping/[shoppingId]/_components/EditShoppingButton'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function ShoppingInformation({ id }: { id?: string }) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const { data: merchandise } = await supabase
    .from('Merchandise')
    .select()
    .eq('id', id ?? '')
    .single()
  if (!merchandise) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <EditShoppingButton merchandise={merchandise} />
      </div>
      <NailInformationItem
        title="商品名"
        text={merchandise.name}
        bgColor="bg-grass2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={merchandise.price.toString()}
        bgColor="bg-grass4"
        style="mb-4"
      />
    </div>
  )
}
