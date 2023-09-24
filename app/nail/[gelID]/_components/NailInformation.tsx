import CircleButton from '@/app/_components/common/CircleButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import HandEdit from '@/public/icons/hand_edit.svg'

type GelType = Database['public']['Tables']['GelTypes']['Row']

async function gelTypeInfo(id?: string) {
  if (!id) return undefined
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/GelTypes?gel_id=eq.${id}`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  const data: GelType[] = await res.json()
  return data[0]
}

export default async function NailInformation({ id }: { id?: string }) {
  const gelType = await gelTypeInfo(id)
  if (!gelType) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<HandEdit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-pink9"
        />
      </div>
      <NailInformationItem
        title="ジェル名"
        text={`${gelType ? gelType.name : ''} `}
        bgColor="bg-pink2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={gelType.price?.toString() ?? ''}
        bgColor="bg-pink4"
        style="mb-4"
      />
    </div>
  )
}
