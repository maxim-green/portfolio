import styles from 'components/Navigation/Navigation.module.scss'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'

const Navigation = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const {page} = useRouter().query

    const menuClickHandler = () => {
        setMenuOpened(prev => !prev)
    }

    useEffect(() => {
        setMenuOpened(false)
    }, [page])

    return (<div className={styles.wrapper}>
            <button className={styles.menuButton} onClick={menuClickHandler}>
                {menuOpened ? <img src="/x-lg.svg" alt="list"/> : <img src="/list.svg" alt="list"/> }
            </button>
            <nav className={`${styles.list} ${menuOpened ? styles.listActive : ''}`}>
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
        </div>
    )
}

export default Navigation
