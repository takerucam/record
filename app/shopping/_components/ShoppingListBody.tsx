import ShoppingCard from '@/app/shopping/_components/ShoppingCard'
import { Database } from '@/libs/database.types'

type Merchandise = Database['public']['Tables']['Merchandise']['Row']

async function fetchMerchandise() {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/Merchandise?select=*`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const data: Merchandise[] = await res.json()
  return data
}

export default async function ShoppingListBody() {
  const merMerchandises = await fetchMerchandise()
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {merMerchandises.map((merMerchandise: Merchandise) => {
          return (
            <div key={merMerchandise.merchandise_id}>
              <ShoppingCard
                shoppingId={merMerchandise.merchandise_id}
                name={merMerchandise.name ?? ''}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
