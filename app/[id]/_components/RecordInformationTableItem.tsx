export default function RecordInformationTableItem({
  text,
  styles,
}: {
  text: string
  styles: string
}) {
  return (
    <div className={`${styles} bg-cyan1`}>
      <p className="text-gray py-[6px] pl-2 text-xl font-bold">{text}</p>
    </div>
  )
}
