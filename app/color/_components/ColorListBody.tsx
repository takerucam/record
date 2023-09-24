import ColorCard from '@/app/color/_components/ColorCard'
import { Database } from '@/libs/database.types'

type ColorType = Database['public']['Tables']['ColorTypes']['Row']

async function fetchColorTypes() {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/ColorTypes?select=*`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const data: ColorType[] = await res.json()
  return data
}

export default async function NailListBody() {
  const colorTypes = await fetchColorTypes()
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {colorTypes.map((colorType: ColorType) => {
          return (
            <div key={colorType.color_id}>
              <ColorCard
                colorId={colorType.color_id}
                name={colorType.name ?? ''}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
