import CircleButton from '@/app/_components/common/CircleButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import Edit from '@/public/icons/edit.svg'
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
  if (!merchandise) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-grass9"
        />
      </div>
      <NailInformationItem
        title="商品名"
        text={`${merchandise ? merchandise[0].name : ''} `}
        bgColor="bg-grass2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={merchandise[0].price?.toString() ?? ''}
        bgColor="bg-grass4"
        style="mb-4"
      />
    </div>
  )
}
