import Link from 'next/link'

export default function ShoppingCard({
  shoppingId,
  name,
}: {
  shoppingId: number
  name: string
}) {
  return (
    <Link href={`/shopping/${shoppingId}`}>
      <div className="border-border-gray bg-cyan1 mb-4 flex w-[352px] items-center justify-between rounded-xl border px-4 py-6 drop-shadow-lg">
        <p className="text-gray text-2xl">{name}</p>
      </div>
    </Link>
  )
}
