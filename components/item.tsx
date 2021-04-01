import Image from 'next/image'

export default function Item ({ title, description, imageId, url }: {
  title: string
  imageId?: string // optional
  description: string
  url: string
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 roudned p-4 max-w-72 w-full transition-colors">
      <a href={url} title={title} className="flex justify-items-center flex-col border-none">
        <Icon title={title} imageId={imageId} />
        <div className="flex flex-col text-left">
          <h3 className="my-1 font-bold">{title}</h3>
          <p className="my-1">{description}</p>
        </div>
      </a>
    </div>
  )
}

function Icon ({ title, imageId }: {title:string, imageId: string}) {
  if (imageId !== undefined) {
    return (
        <img
          src={`/assets/uses/${imageId}.png`}
          alt={title}
          width={64}
          height={64}
          className="max-h-16 max-w-16 rounded-lg mt-4 mb-2"
        />
    )
  }
  return null
}
