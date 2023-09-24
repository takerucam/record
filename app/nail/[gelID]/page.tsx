import BaseLayout from '@/app/_components/common/BaseLayout'
import NailCardList from '@/app/nail/_components/NailCardList'
import NailListBody from '@/app/nail/_components/NailListBody'
import NailInformation from '@/app/nail/[gelID]/_components/NailInformation'

export default function NailDetailPage({
  params,
}: {
  params: { gelID: string }
}) {
  const body = <NailListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<NailCardList body={body} />}
        customerInformation={<NailInformation id={params.gelID} />}
      />
    </main>
  )
}
