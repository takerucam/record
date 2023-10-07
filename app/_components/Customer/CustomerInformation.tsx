import CircleButton from '@/app/_components/common/CircleButton'
import CustomerInformationItem from '@/app/_components/Customer/CustomerInformationItem'
import { Database } from '@/libs/database.types'
import Edit from '@/public/icons/edit.svg'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function CustomerInformation({ id }: { id?: string }) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })
  const { data: customerInfo } = await supabase
    .from('CustomerList')
    .select()
    .eq('id', id ?? '')
    .single()

  if (!customerInfo) return null
  return (
    <div className="relative h-full w-full pl-8 pt-16">
      <div className="absolute bottom-[88px] right-4">
        <CircleButton
          svg={<Edit width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-cyan9"
        />
      </div>
      <CustomerInformationItem
        title="名前"
        text={`${customerInfo.name + ' 様'} `}
        bgColor="bg-cyan2"
        style="mb-4"
      />
      <CustomerInformationItem
        title="連絡先"
        text={customerInfo.phone_number ?? ''}
        bgColor="bg-cyan4"
        style="mb-4"
      />
      <CustomerInformationItem
        title="住所"
        text={customerInfo.address ?? ''}
        bgColor="bg-cyan2"
        style="mb-4"
      />
      <CustomerInformationItem
        title="メモ"
        text={customerInfo.memo ?? ''}
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
