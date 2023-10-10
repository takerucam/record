import EditNailButton from '@/app/nail/[gelID]/_components/EditNailButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function NailInformation({ id }: { id?: string }) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: gelType } = await supabase
    .from('GelTypes')
    .select()
    .eq('id', id ?? '')
    .single()
  if (!gelType) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <EditNailButton gelType={gelType} />
      </div>
      <NailInformationItem
        title="ジェル名"
        text={gelType.name}
        bgColor="bg-pink2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={gelType.price.toString()}
        bgColor="bg-pink4"
        style="mb-4"
      />
    </div>
  )
}
