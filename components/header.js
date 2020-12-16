import styles from './header.module.scss'

// <Header title="Insert title here" />

export default function Header({title}) {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
        </div>
    )
}