export default function dashboardItem ({
  value,
  caption,
  link
}: {
  value : string,
  caption : string,
  link : string
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
      <a
        aria-label={caption}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-gray-900 dark:text-gray-100 font-semibold">
          {caption}
          <svg
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
        {value || '-'}
      </p>
    </div>
  )
}