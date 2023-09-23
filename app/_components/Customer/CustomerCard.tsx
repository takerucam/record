import Link from 'next/link'

export default function CustomerCard({
  customerId,
  name,
  birthday,
}: {
  customerId: number
  name: string
  birthday: string
}) {
  return (
    <Link href={`/${customerId}`}>
      <div className="border-border-gray bg-cyan1 mb-4 flex w-[352px] items-center justify-between rounded-xl border px-4 py-6 drop-shadow-lg">
        <p className="text-gray text-2xl">{`No.${customerId}`}</p>
        <p className="text-gray text-2xl">{`${name} 様`}</p>
        <p className="text-gray text-2xl">{birthday}</p>
      </div>
    </Link>
  )
}
