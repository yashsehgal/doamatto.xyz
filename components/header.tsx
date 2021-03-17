export default function Header ({ title, subtitle }: {title: string, subtitle?: string}) {
  if (subtitle === undefined) {
    return (
        <div className="text-center">
            <h1 className="text-6xl leading-normal font-bold">{title}</h1>
        </div>
    )
  } else {
    return (
      <div className="text-center">
          <h1 className="text-5xl leading-normal font-bold">{title}</h1>
          <h3 className="text-lg leading-snug">{subtitle}</h3>
      </div>
    )
  }
}
