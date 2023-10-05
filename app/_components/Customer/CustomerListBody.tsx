import CustomerCard from '@/app/_components/Customer/CustomerCard'
import { Database } from '@/libs/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type CustomerList = Database['public']['Tables']['CustomerList']['Row']

export default async function CustomerListBody() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: customerList } = await supabase.from('CustomerList').select()

  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {customerList?.map((customer: CustomerList) => {
          return (
            <div key={customer.id}>
              <CustomerCard
                customerId={customer.customer_id?.toString() ?? ''}
                name={customer.name ?? ''}
                birthday={customer.birthday}
                id={customer.id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
