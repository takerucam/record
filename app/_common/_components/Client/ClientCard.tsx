type Props = {
  title: string
  text?: string
  bgColor: string
  style?: string
}

export default function ClientCard({ title, text, bgColor, style }: Props) {
  return (
    <div
      className={`${bgColor} w-[540px] pl-4 pt-4 ${style} min-h-[112px] rounded-xl`}
    >
      <p className="text-gray mb-2 text-4xl font-bold">{title}</p>
      <p className="text-gray pb-4 pl-12 text-2xl">{text}</p>
    </div>
  )
}
