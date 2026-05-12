import styles from './SectionTag.module.css'

export function SectionTag({ children }) {
  return <p className={styles.tag}>{children}</p>
}
