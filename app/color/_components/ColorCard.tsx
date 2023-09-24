import Link from 'next/link'

export default function ColorCard({
  colorId,
  name,
}: {
  colorId: number
  name: string
}) {
  return (
    <Link href={`/color/${colorId}`}>
      <div className="border-border-gray bg-cyan1 mb-4 flex w-[352px] items-center justify-between rounded-xl border px-4 py-6 drop-shadow-lg">
        <p className="text-gray text-2xl">{name}</p>
      </div>
    </Link>
  )
}
