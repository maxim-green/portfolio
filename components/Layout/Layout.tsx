import styles from 'components/Layout/Layout.module.scss'
import MainCard from 'components/MainCard/MainCard'
import React from 'react'
import Navigation from 'components/Navigation/Navigation'

const Layout: React.FC<{children?: React.ReactElement}> = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.background}/>
            <MainCard>
                <Navigation/>
                {children}
            </MainCard>
        </div>
    )
}

export default Layout
