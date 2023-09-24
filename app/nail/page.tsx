import BaseLayout from '@/app/_components/common/BaseLayout'
import NailCardList from '@/app/nail/_components/NailCardList'
import NailListBody from '@/app/nail/_components/NailListBody'

export default function NailRootPage() {
  const body = <NailListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout recordCardList={<NailCardList body={body} />} />
    </main>
  )
}
