import Hand from '@/public/icons/hand.svg'
import Palette from '@/public/icons/palette.svg'
import People from '@/public/icons/people.svg'
import ShoppingCart from '@/public/icons/shopping_cart.svg'

export default function RecordListFooter() {
  return (
    <div className="border-border-gray mt-auto h-[71px] border-t ">
      <div className="flex justify-between px-8 py-4">
        <People width={40} height={40} fill="#3DB9CF" />
        <Hand width={40} height={40} fill="#3DB9CF" />
        <Palette width={40} height={40} fill="#3DB9CF" />
        <ShoppingCart width={40} height={40} fill="#3DB9CF" />
      </div>
    </div>
  )
}
