export default function BaseLayout({
  recordCardList,
  clientProfile,
}: {
  recordCardList: React.ReactNode
  clientProfile: React.ReactNode
}) {
  return (
    <div className="flex overflow-hidden">
      <div>{recordCardList}</div>
      <div className="grow">{clientProfile}</div>
    </div>
  )
}
