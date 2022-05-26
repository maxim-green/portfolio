import styles from './SkillCard.module.scss'
import FloatingCard from 'components/FloatingCard/FloatingCard'
import React from 'react'
import Image from 'next/image'
import PercentageWheel from '../PercentageWheel/PercentageWheel'

const SkillCard: React.FC<{
    image: string,
    title: string,
    percentage: number,
    children: React.ReactElement | string
}> = ({
    image,
    title,
    percentage,
    children
                       }) => {
    return <FloatingCard>
        <div className={styles.content}>
            <div className={styles.image}>
                <img src={image} alt="" height={50} width={70}/>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}><PercentageWheel percentage={percentage}/></div>
        </div>
        <div className={styles.content}>
            <div className={styles.title}>I know</div>
            <div className={styles.description}>{children}</div>
        </div>
    </FloatingCard>
}

export default SkillCard
