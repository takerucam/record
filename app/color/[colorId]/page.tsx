import BaseLayout from '@/app/_components/common/BaseLayout'
import ColorCardList from '@/app/color/_components/ColorCardList'
import ColorListBody from '@/app/color/_components/ColorListBody'
import ColorInformation from '@/app/color/[colorId]/_components/ColorInformation'

export default function NailDetailPage({
  params,
}: {
  params: { colorId: string }
}) {
  const body = <ColorListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<ColorCardList body={body} />}
        customerInformation={<ColorInformation id={params.colorId} />}
      />
    </main>
  )
}
