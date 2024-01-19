import React, { useState } from 'react'
import styles from './DropdownLayout.module.css'

interface DropdownLayoutProps {
  maxWidth?: string
  iconSrc?: string
  title: string
  children: React.ReactNode
}
const DropdownLayout: React.FC<DropdownLayoutProps> = ({
  maxWidth,
  title,
  iconSrc,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((o) => !o)
  }

  return (
    <div className={styles.dropdown} style={{ maxWidth }}>
      <div className={styles.trigger} onClick={handleToggle}>
        {iconSrc && <img width={24} height={24} src={iconSrc} />}
        <span className={styles.title}>{title}</span>
        {/* prettier-ignore */}
        <svg className={`${styles.icon} ${isOpen ? styles.active : ''}`} xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
          <path d="M1.51953 1L7.4343 7L13.3491 1" stroke="#EA0029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.active : ''}`}>
        {children && <div className={styles.content_container}>{children}</div>}
      </div>
    </div>
  )
}
export default DropdownLayout
