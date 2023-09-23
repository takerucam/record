import CircleButton from '@/app/_components/common/CircleButton'
import CustomerInformationItem from '@/app/_components/Customer/CustomerInformationItem'
import { Database } from '@/libs/database.types'
import PersonEdit from '@/public/icons/person_edit.svg'
import Link from 'next/link'

type CustomerList = Database['public']['Tables']['CustomerList']['Row']

async function fetchCustomerInfo(id?: string) {
  if (!id) return undefined
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/CustomerList?customer_id=eq.${id}`,
    {
      headers: new Headers({
        apikey: String(process.env.SUPABASE_API_KEY),
      }),
    }
  )

  const data: CustomerList[] = await res.json()
  return data[0]
}

export default async function CustomerInformation({ id }: { id?: string }) {
  const customerInfo = await fetchCustomerInfo(id)
  if (!customerInfo) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<PersonEdit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </div>
      <CustomerInformationItem
        title="名前"
        text={`${customerInfo ? customerInfo.name + ' 様' : ''} `}
        bgColor="bg-cyan2"
        style="mb-4"
      />
      <CustomerInformationItem
        title="連絡先"
        text={customerInfo?.number?.toString() ?? ''}
        bgColor="bg-cyan4"
        style="mb-4"
      />
      <CustomerInformationItem
        title="住所"
        text={customerInfo?.address ?? ''}
        bgColor="bg-cyan2"
        style="mb-4"
      />
      <CustomerInformationItem
        title="メモ"
        text={customerInfo?.memo ?? ''}
        bgColor="bg-cyan4"
      />
      {customerInfo ? (
        <Link href={`/${id}/0`}>
          <p className="text-gray mt-10 rounded-xl p-4 text-2xl font-bold underline">
            カルテ情報
          </p>
        </Link>
      ) : null}
    </div>
  )
}
