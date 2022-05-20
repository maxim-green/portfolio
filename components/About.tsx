import styles from '../styles/About.module.scss'
import Avatar from '../components/Avatar'
import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <Avatar/>
            <h1 className={styles.title}>Max Georgievsky</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <div className={styles.buttons}>
                <Link href={'/projects'}><a><Button width={180}>View projects</Button></a></Link>
                <Link href={'/contacts'}><a><Button width={180}>Contact me</Button></a></Link>

            </div>
        </div>
    )
}

export default About