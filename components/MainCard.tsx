import React from 'react'
import styles from '../styles/MainCard.module.scss'
import Navigation from '../components/Navigation'

const MainCard: React.FC<{children?: Array<React.ReactElement | string | undefined>}> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default MainCard