import BaseLayout from '@/app/_components/common/BaseLayout'
import ColorCardList from '@/app/color/_components/ColorCardList'
import ColorListBody from '@/app/color/_components/ColorListBody'

export default function NailRootPage() {
  const body = <ColorListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout recordCardList={<ColorCardList body={body} />} />
    </main>
  )
}
