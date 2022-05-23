import styles from 'components/Button/Button.module.scss'
import React from 'react'

const Button: React.FC<{
    children?: Array<React.ReactElement | string> | React.ReactElement | string
    width?: number | string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}> = ({children, width = 'auto', onClick}) => {
    return <button className={styles.wrapper} style={{width}} onClick={onClick}>
        <div className={styles.text}>{children}</div>
    </button>
}

export default Button
