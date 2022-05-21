import styles from '../styles/Navigation.module.scss'
import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'

const Navigation = () => {
    const {page} = useRouter().query
    return (
        <nav className={styles.list}>
            <div className={`${styles.item} ${(page === 'about') ? styles.active : ''}`}>
                <Link href={'about'}>About me</Link>
            </div>
            <div className={`${styles.item} ${(page === 'skills') ? styles.active : ''}`}>
                <Link href={'skills'}>Skills</Link>
            </div>
            <div className={`${styles.item} ${(page === 'projects') ? styles.active : ''}`}>
                <Link href={'projects'}>Projects</Link>
            </div>
            <div className={`${styles.item} ${(page === 'contacts') ? styles.active : ''}`}>
                <Link href={'contacts'}>Contacts</Link>
            </div>
        </nav>
    )
}

export default Navigation
