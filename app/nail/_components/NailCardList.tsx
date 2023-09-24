import CircleButton from '@/app/_components/common/CircleButton'
import RecordListFooter from '@/app/_components/Record/RecordListFooter'
import RecordListHeader from '@/app/_components/Record/RecordListHeader'
import HandAdd from '@/public/icons/hand_add.svg'

export default function NailCardList({ body }: { body: React.ReactNode }) {
  return (
    <div className="border-pink7 relative flex h-screen w-[395px] flex-col border-r-4">
      <RecordListHeader />
      {body}
      <div className="absolute bottom-[87px] right-2">
        <CircleButton
          svg={<HandAdd width={32} height={32} fill="#FFFFFF" />}
          bgColor="bg-pink9"
        />
      </div>
      <RecordListFooter />
    </div>
  )
}
