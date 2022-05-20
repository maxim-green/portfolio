import styles from '../styles/Layout.module.scss'
import MainCard from '../components/MainCard'
import React from 'react'
import Navigation from '../components/Navigation'

const Layout: React.FC<{children?: React.ReactElement}> = ({children}) => {
    return (
        <div className={styles.layout}>
            <MainCard>
                <Navigation/>
                {children}
            </MainCard>
        </div>
    )
}

export default Layout
