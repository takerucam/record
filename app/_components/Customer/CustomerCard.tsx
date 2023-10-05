import dayjs from 'dayjs'
import Link from 'next/link'

export default function CustomerCard({
  customerId,
  name,
  birthday,
  id,
}: {
  customerId: string
  name: string
  birthday: string | null
  id: string
}) {
  return (
    <Link href={`/${id}`}>
      <div className="border-border-gray bg-cyan1 mb-4 flex w-[352px] items-center rounded-xl border px-4 py-6 drop-shadow-lg">
        <p className="text-gray pr-6 text-2xl">{`No.${customerId}`}</p>
        <p className="text-gray pr-4 text-2xl">{`${name} 様`}</p>
        {birthday ? (
          <p className="text-gray ml-auto text-2xl">
            {dayjs(birthday).format('M月D日')}
          </p>
        ) : null}
      </div>
    </Link>
  )
}
