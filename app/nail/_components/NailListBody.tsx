import NailCard from '@/app/nail/_components/NailCard'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type GelType = Database['public']['Tables']['GelTypes']['Row']

export default async function NailListBody() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: gelTypes } = await supabase
    .from('GelTypes')
    .select()
    .order('created_at', { ascending: true })
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {gelTypes?.map((gelType: GelType) => {
          return (
            <div key={gelType.id}>
              <NailCard gelId={gelType.id} name={gelType.name ?? ''} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
