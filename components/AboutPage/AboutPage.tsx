import styles from 'components/AboutPage/AboutPage.module.scss'
import Avatar from 'components/Avatar/Avatar'
import React from 'react'
import Button from 'components/Button/Button'
import Link from 'next/link'
import Animated from 'components/Animated/Animated'
import {PagePhases} from 'redux/app/appSlice'


const AboutPage: React.FC<{phase: PagePhases}> = ({phase}) => {
    return (
        <div className={styles.wrapper}>
            <Animated phase={phase} delay={100}>
                <Avatar/>
            </Animated>
            <Animated phase={phase} delay={200}>
                <h1 className={styles.title}>Max Georgievsky</h1>
            </Animated>
            <Animated phase={phase} delay={300}>
                <p className={styles.text}>
                    Front-end developer
                </p>
            </Animated>
            <div className={styles.buttons}>
                <Animated phase={phase} delay={400}>
                    <Link href={'/projects'}><a><Button width={180}>View projects</Button></a></Link>
                </Animated>
                <Animated phase={phase} delay={500}>
                    <Link href={'/contacts'}><a><Button width={180}>Contact me</Button></a></Link>
                </Animated>
            </div>
        </div>
    )
}

export default AboutPage
