export default function RecordInformationFingerItem({
  text,
  styles,
}: {
  text: string
  styles: string
}) {
  return (
    <div className={`${styles} bg-cyan1`}>
      <div className="h-12 border-b"></div>
      <div className="h-24"></div>
    </div>
  )
}
