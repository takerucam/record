export default function BaseLayout({
  recordCardList,
  customerInformation,
}: {
  recordCardList: React.ReactNode
  customerInformation: React.ReactNode
}) {
  return (
    <div className="flex overflow-hidden">
      <div>{recordCardList}</div>
      <div className="grow">{customerInformation}</div>
    </div>
  )
}
