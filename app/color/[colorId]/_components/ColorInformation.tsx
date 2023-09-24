import CircleButton from '@/app/_components/common/CircleButton'
import NailInformationItem from '@/app/nail/[gelID]/_components/NailInformationItem'
import { Database } from '@/libs/database.types'
import PaletteEdit from '@/public/icons/palette_edit.svg'

type ColorType = Database['public']['Tables']['ColorTypes']['Row']

async function colorTypesInfo(id?: string) {
  if (!id) return undefined
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/ColorTypes?color_id=eq.${id}`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  const data: ColorType[] = await res.json()
  return data[0]
}

export default async function ColorInformation({ id }: { id?: string }) {
  const colorTypes = await colorTypesInfo(id)
  if (!colorTypes) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<PaletteEdit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-amber9"
        />
      </div>
      <NailInformationItem
        title="カラー名"
        text={`${colorTypes ? colorTypes.name : ''} `}
        bgColor="bg-amber2"
        style="mb-4"
      />
      <NailInformationItem
        title="価格"
        text={colorTypes.price?.toString() ?? ''}
        bgColor="bg-amber4"
        style="mb-4"
      />
    </div>
  )
}
