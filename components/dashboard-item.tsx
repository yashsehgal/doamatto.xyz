const styles = require('./dashboard-item.module.scss')

export default function dashboardItem ({
  value,
  caption,
  link,
  service
}: {
  value : string,
  caption : string,
  link : string,
  service : string
}) {
  return (
    <a href={link} rel={service}>
      <section>
        <p className={styles.metric}>{value}</p>
        <p className={styles.caption}>{caption}<LinkIcon/></p>
      </section>
    </a>
  )
}

function LinkIcon() {
  return (
    <svg className={styles.linkIcon}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  )
}
