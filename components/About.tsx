import styles from '../styles/About.module.scss'
import Avatar from '../components/Avatar'
import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'
import useDelayedUnmounting from '../hooks/useDelayedUnmounting'
import Animated from './Animated/Animated'

const About: React.FC<{phase: any}> = ({phase}) => {
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
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

export default About
