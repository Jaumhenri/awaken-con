import styles from './Button.module.css'

export function Button({ children, variant = 'primary', href, onClick, className = '', style }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls} style={style}>{children}</a>
  }

  return (
    <button onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  )
}
