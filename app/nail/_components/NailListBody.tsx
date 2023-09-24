import NailCard from '@/app/nail/_components/NailCard'
import { Database } from '@/libs/database.types'

type GelType = Database['public']['Tables']['GelTypes']['Row']

async function fetchGelTypes() {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/GelTypes?select=*`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const data: GelType[] = await res.json()
  return data
}

export default async function NailListBody() {
  const gelTypes = await fetchGelTypes()
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {gelTypes.map((gelType: GelType) => {
          return (
            <div key={gelType.gel_id}>
              <NailCard gelId={gelType.gel_id} name={gelType.name ?? ''} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
