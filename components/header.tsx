const styles = require('./header.module.scss')

// <Header title="Insert title here" />

export default function Header ({ title, subtitle }: {title: string, subtitle?: string}) {
  if (subtitle === undefined) {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
        </div>
    )
  } else {
    return (
      <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>
    )
  }
}
