import React from 'react'
import styles from 'components/MainCard/MainCard.module.scss'
import Navigation from 'components/Navigation/Navigation'

const MainCard: React.FC<{children?: Array<React.ReactElement | string | undefined>}> = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default MainCard