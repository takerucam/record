'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderTextType = {
  path: string
  borderColor: string
  text: string
  textColor: string
}

const HeaderText = [
  {
    path: 'nail',
    borderColor: 'border-pink3',
    text: 'ネイル一覧',
    textColor: 'text-pink9',
  },
  {
    path: 'color',
    borderColor: 'border-amber3',
    text: 'カラー一覧',
    textColor: 'text-amber9',
  },
  {
    path: 'shopping',
    borderColor: 'border-grass3',
    text: '物販一覧',
    textColor: 'text-grass9',
  },
  {
    path: '/',
    borderColor: 'border-cyan3',
    text: '顧客一覧',
    textColor: 'text-cyan9',
  },
]

function headerText(path: string): HeaderTextType {
  return HeaderText.find((text) => path.includes(text.path)) ?? HeaderText[0]
}

export default function RecordListHeader() {
  const pathname = usePathname()
  const { borderColor, text, textColor } = headerText(pathname)
  const isRecord = pathname.split('/').length > 2 && text === '顧客一覧'
  return (
    <div className={`${borderColor} flex  justify-center border-b-4 py-6`}>
      <Link href="/">
        <p className={`${textColor} text-2xl font-bold`}>
          {isRecord ? 'カルテ' : text}
        </p>
      </Link>
    </div>
  )
}
