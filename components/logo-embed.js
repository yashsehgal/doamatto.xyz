import styles from './logo-embed.module.scss'

export default function Logo() {
    return (
        <svg width="100" height="100" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
            <path d="M245.344 188.5C247.269 185.167 252.08 185.167 254.004 188.5L325.019 311.5C326.943 314.833 324.537 319 320.688 319H178.66C174.811 319 172.406 314.833 174.33 311.5L245.344 188.5Z" stroke="black" strokeWidth="15"/>
        </svg>
    );
}