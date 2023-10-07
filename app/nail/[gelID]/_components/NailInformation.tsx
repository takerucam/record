import CircleButton from '@/app/_components/common/CircleButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import Edit from '@/public/icons/edit.svg'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function NailInformation({ id }: { id?: string }) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: gelTypes } = await supabase
    .from('GelTypes')
    .select()
    .eq('id', id ?? '')
    .single()
  if (!gelTypes) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-pink9"
        />
      </div>
      <NailInformationItem
        title="ジェル名"
        text={gelTypes.name}
        bgColor="bg-pink2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={gelTypes.price.toString()}
        bgColor="bg-pink4"
        style="mb-4"
      />
    </div>
  )
}
