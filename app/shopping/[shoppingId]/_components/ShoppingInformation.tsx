import CircleButton from '@/app/_components/common/CircleButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import ShoppingCartEdit from '@/public/icons/shopping_cart_edit.svg'

type Merchandise = Database['public']['Tables']['Merchandise']['Row']

async function merchandiseInfo(id?: string) {
  if (!id) return undefined
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/Merchandise?merchandise_id=eq.${id}`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  const data: Merchandise[] = await res.json()
  return data[0]
}

export default async function ShoppingInformation({ id }: { id?: string }) {
  const merchandise = await merchandiseInfo(id)
  if (!merchandise) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<ShoppingCartEdit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-grass9"
        />
      </div>
      <NailInformationItem
        title="商品名"
        text={`${merchandise ? merchandise.name : ''} `}
        bgColor="bg-grass2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={merchandise.price?.toString() ?? ''}
        bgColor="bg-grass4"
        style="mb-4"
      />
    </div>
  )
}
