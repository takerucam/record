import Birthday from '@/public/icons/birthday.svg'
import Link from 'next/link'

export default function RecordCard({
  customerId,
  id,
  date,
  isBirthday,
}: {
  customerId: string
  id: string
  date: string
  isBirthday: boolean
}) {
  return (
    <Link href={`/${customerId}/${id}`}>
      <div className="border-border-gray bg-cyan1 mb-4 flex w-[352px] items-center justify-between rounded-xl border py-6 pl-4 pr-8 drop-shadow-lg">
        <p className="text-gray text-2xl">{date}</p>
        {isBirthday ? <Birthday width={32} height={32} fill="#3DB9CF" /> : null}
      </div>
    </Link>
  )
}
