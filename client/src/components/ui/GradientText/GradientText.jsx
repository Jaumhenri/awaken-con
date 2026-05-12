import styles from './GradientText.module.css'

const variantClass = {
  warm:   'warm',
  fire:   'fire',
  cool:   'cool',
  purple: 'purple',
}

export function GradientText({ children, variant = 'warm', as: Tag = 'span', className = '' }) {
  return <Tag className={`${styles.base} ${styles[variantClass[variant]]} ${className}`}>{children}</Tag>
}
