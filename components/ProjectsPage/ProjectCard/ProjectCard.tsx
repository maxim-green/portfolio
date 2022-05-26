import FloatingCard from 'components/FloatingCard/FloatingCard'
import styles from './ProjectCard.module.scss'
import Image, {StaticImageData} from 'next/image'
import Button from 'components/Button/Button'
import React from 'react'
import Link from 'next/link'

const ProjectCard: React.FC<{
    image: string
    title: string
    usedTechnologies: string[]
    websiteUrl: string
    githubUrl: string
}> = ({image, title, usedTechnologies, websiteUrl, githubUrl}) => {
    return (
        <FloatingCard maxRotateX={2} maxRotateY={2}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={image} width={280} height={190} alt={'project image'}/>
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                    <ul>
                        {usedTechnologies.map((tech, index) => <li key={index}>{tech}</li>)}
                    </ul>
                </div>
                <div className={styles.links}>
                    <Link href={websiteUrl}><a><Button width={180}>Visit website</Button></a></Link>
                    <a href={githubUrl} className={styles.link}>View on GitHub</a>
                </div>
            </div>
        </FloatingCard>
    )
}

export default ProjectCard