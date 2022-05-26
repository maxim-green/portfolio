import styles from './ContactsPage.module.scss'
import {PagePhases} from 'redux/app/appSlice'
import React from 'react'
import Image from 'next/image'
import logoEmail from '../../public/logo-email.png'
import logoVk from '../../public/logo-vk.png'
import logoTelegram from '../../public/logo-telegram.png'
import logoGithub from '../../public/logo-github.png'
import logoLinkedin from '../../public/logo-linkedin.png'
import Animated from 'components/Animated/Animated'

const ContactsPage: React.FC<{ phase: PagePhases }> = ({phase}) => {
    return (
        <ul className={styles.list}>
            <Animated phase={phase}>
                <li className={styles.item} >
                    <a href={'mailto:max.georgievsky@gmail.com'} className={styles.link}><Image
                        src={logoEmail}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={100}>
                <li className={styles.item}>
                    <a href={'https://t.me/maxgeorgievsky'} className={styles.link}><Image
                        src={logoTelegram}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={200}>
                <li className={styles.item}>
                    <a href={'https://vk.com/maximgreen'} className={styles.link}><Image
                        src={logoVk}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={300}>
                <li className={styles.item}>
                    <a href={'https://github.com/maxim-green'} className={styles.link}><Image
                        src={logoGithub}/></a>
                </li>
            </Animated>
            <Animated phase={phase} delay={400}>
                <li className={styles.item}>
                    <a href={'https://www.linkedin.com/in/max-georgievsky-429a0b239/'} className={styles.link}><Image
                        src={logoLinkedin}/></a>
                </li>
            </Animated>
        </ul>
    )
}

export default ContactsPage