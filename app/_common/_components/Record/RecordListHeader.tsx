'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RecordListHeader() {
  const pathname = usePathname()
  const isRecord = pathname.split('/').length > 2
  return (
    <div className="border-cyan3 flex  justify-center border-b-4 py-6">
      <Link href="/">
        <p className="text-cyan9 text-2xl font-bold">
          {isRecord ? 'カルテ' : '顧客一覧'}
        </p>
      </Link>
    </div>
  )
}
