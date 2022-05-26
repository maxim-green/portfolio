import styles from './ContactsPage.module.scss'
import {PagePhases} from 'redux/app/appSlice'
import React from 'react'
import Image from 'next/image'
import Animated from 'components/Animated/Animated'

const ContactsPage: React.FC<{ phase: PagePhases }> = ({phase}) => {
    return (
        <ul className={styles.list}>
            <Animated phase={phase}>
                <li className={styles.item} >
                    <a href={'mailto:max.georgievsky@gmail.com'} className={styles.link}><img
                        src={'/logo-email.png'} width={50} height={50} alt={'e-mail'}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={100}>
                <li className={styles.item}>
                    <a href={'https://t.me/maxgeorgievsky'} className={styles.link}><img
                        src={'/logo-telegram.png'} width={50} height={50} alt={'telegram'}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={200}>
                <li className={styles.item}>
                    <a href={'https://vk.com/maximgreen'} className={styles.link}><img
                        src={'/logo-vk.png'} width={50} height={50} alt={'vkontakte'}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={300}>
                <li className={styles.item}>
                    <a href={'https://github.com/maxim-green'} className={styles.link}><img
                        src={'/logo-github.png'} width={50} height={50} alt={'github'}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={400}>
                <li className={styles.item}>
                    <a href={'https://www.linkedin.com/in/max-georgievsky-429a0b239/'} className={styles.link}><img
                        src={'/logo-linkedin.png'} width={50} height={50} alt={'linkedin'}/></a>
                </li>
            </Animated>
        </ul>
    )
}

export default ContactsPage