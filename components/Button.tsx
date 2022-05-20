import styles from '../styles/Button.module.scss'
import React from 'react'

const Button: React.FC<{
    children?: React.ReactElement | string
    width?: number | string
}> = ({children, width = 'auto'}) => {
    return <button className={styles.wrapper} style={{width}}>
        <div className={styles.text}>{children}</div>
    </button>
}

export default Button