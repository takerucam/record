'use client'

import Hand from '@/public/icons/hand.svg'
import Palette from '@/public/icons/palette.svg'
import People from '@/public/icons/people.svg'
import ShoppingCart from '@/public/icons/shopping_cart.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FooterIconColors = [
  {
    path: 'nail',
    mainColor: '#E38EC3',
    subColor: '#F9D8EC',
  },
  {
    path: 'color',
    mainColor: '#EE9D2B',
    subColor: '#FFE3A2',
  },
  {
    path: 'shopping',
    mainColor: '#65BA75',
    subColor: '#CEEBCF',
  },
  {
    path: '/',
    mainColor: '#3DB9CF',
    subColor: '#C4EAEF',
  },
]

function footerIconColor(pathname: string) {
  return FooterIconColors.find((color) => pathname.includes(color.path))
}

export default function RecordListFooter() {
  const pathname = usePathname()
  const color = footerIconColor(pathname)

  return (
    <div className="border-border-gray mt-auto h-[71px] border-t ">
      <div className="flex justify-between px-8 py-4">
        <Link href="/">
          <People
            width={40}
            height={40}
            fill={
              '/'.includes(color?.path ?? '')
                ? color?.mainColor
                : color?.subColor
            }
          />
        </Link>
        <Link href="/nail">
          <Hand
            width={40}
            height={40}
            fill={
              'nail'.includes(color?.path ?? '')
                ? color?.mainColor
                : color?.subColor
            }
          />
        </Link>
        <Link href="/color">
          <Palette
            width={40}
            height={40}
            fill={
              'color'.includes(color?.path ?? '')
                ? color?.mainColor
                : color?.subColor
            }
          />
        </Link>
        <Link href="/shopping">
          <ShoppingCart
            width={40}
            height={40}
            fill={
              'shopping'.includes(color?.path ?? '')
                ? color?.mainColor
                : color?.subColor
            }
          />
        </Link>
      </div>
    </div>
  )
}
