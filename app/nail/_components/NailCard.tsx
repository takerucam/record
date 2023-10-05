import Link from 'next/link'

export default function NailCard({
  gelId,
  name,
}: {
  gelId: string
  name: string
}) {
  return (
    <Link href={`/nail/${gelId}`}>
      <div className="border-border-gray bg-cyan1 mb-4 flex w-[352px] items-center justify-between rounded-xl border px-4 py-6 drop-shadow-lg">
        <p className="text-gray text-2xl">{name}</p>
      </div>
    </Link>
  )
}
