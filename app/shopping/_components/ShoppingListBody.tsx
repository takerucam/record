import ShoppingCard from '@/app/shopping/_components/ShoppingCard'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type Merchandise = Database['public']['Tables']['Merchandise']['Row']

export default async function ShoppingListBody() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: merMerchandises } = await supabase
    .from('Merchandise')
    .select()
    .order('created_at', { ascending: true })
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {merMerchandises?.map((merMerchandise: Merchandise) => {
          return (
            <div key={merMerchandise.id}>
              <ShoppingCard
                shoppingId={merMerchandise.id}
                name={merMerchandise.name ?? ''}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
