import EditColorButton from '@/app/color/[colorId]/_components/EditColorButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function ColorInformation({ id }: { id?: string }) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: colorType } = await supabase
    .from('ColorTypes')
    .select()
    .eq('id', id ?? '')
    .single()
  if (!colorType) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <EditColorButton colorType={colorType} />
      </div>
      <NailInformationItem
        title="カラー名"
        text={colorType.name}
        bgColor="bg-amber2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={colorType.price.toString()}
        bgColor="bg-amber4"
        style="mb-4"
      />
    </div>
  )
}
