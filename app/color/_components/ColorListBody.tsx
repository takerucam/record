import ColorCard from '@/app/color/_components/ColorCard'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type ColorType = Database['public']['Tables']['ColorTypes']['Row']

export default async function NailListBody() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: colorTypes } = await supabase
    .from('ColorTypes')
    .select()
    .order('created_at', { ascending: true })
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {colorTypes?.map((colorType: ColorType) => {
          return (
            <div key={colorType.id}>
              <ColorCard colorId={colorType.id} name={colorType.name ?? ''} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
