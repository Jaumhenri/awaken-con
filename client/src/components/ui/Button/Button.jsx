import styles from './Button.module.css'

export function Button({ children, variant = 'primary', href, target, rel, onClick, className = '', style }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return <a href={href} target={target} rel={rel} className={cls} style={style}>{children}</a>
  }

  return (
    <button onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  )
}
