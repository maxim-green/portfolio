import styles from './SkillCard.module.scss'
import FloatingCard from 'components/FloatingCard/FloatingCard'
import React from 'react'
import Image from 'next/image'

const SkillCard: React.FC<{
    image: string,
    title: string,
    description: string
}> = ({
    image,
    title,
    description
                       }) => {
    return <FloatingCard>
        <div>
            <div className={styles.image}>
                <Image src={image} alt="" height={50} width={70}/>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
        <div>
            <div className={styles.image}>
                <Image src={image} alt="" height={50} width={70}/>
            </div>
            <div className={styles.title}>Second Side</div>
            <div className={styles.description}>{description}</div>
        </div>
    </FloatingCard>
}

export default SkillCard