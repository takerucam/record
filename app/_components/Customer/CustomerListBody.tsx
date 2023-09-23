import CustomerCard from '@/app/_components/Customer/CustomerCard'
import { Database } from '@/libs/database.types'
import dayjs from 'dayjs'

type CustomerList = Database['public']['Tables']['CustomerList']['Row']

async function fetchCustomerList() {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/CustomerList?select=*`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const data: CustomerList[] = await res.json()
  return data
}

export default async function CustomerListBody({}: {}) {
  const CustomerList = await fetchCustomerList()
  return (
    <div className="flex justify-center overflow-auto">
      <div className="mt-12">
        {CustomerList.map((customer: CustomerList) => {
          return (
            <div key={customer.customer_id}>
              <CustomerCard
                customerId={customer.customer_id}
                name={customer.name ?? ''}
                birthday={dayjs(customer.birthday).format('M月D日')}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
