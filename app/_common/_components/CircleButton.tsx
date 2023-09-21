type Props = {
  svg: React.ReactNode
  bgColor: string
  style?: string
}

export default function CircleButton({ svg, bgColor, style }: Props) {
  return (
    <div
      className={`${bgColor} flex h-[62px] w-[62px] items-center justify-center rounded-full ${style}`}
    >
      {svg}
    </div>
  )
}
