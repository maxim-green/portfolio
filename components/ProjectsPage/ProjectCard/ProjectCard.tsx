import FloatingCard from 'components/FloatingCard/FloatingCard'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Button from 'components/Button/Button'

const ProjectCard = () => {
    return (
        <FloatingCard maxRotateX={2} maxRotateY={2}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <Image src={'/project1.png'} width={280} height={190}/>
                </div>
                <div className={styles.title}>
                    Artist Portfolio Website
                </div>
                <div className={styles.description}>
                    <ul>
                        <li>HTML / CSS / JavaScript</li>
                        <li>Next.js</li>
                        <li>Strapi CMS</li>
                    </ul>
                </div>
                <div className={styles.links}>
                    <Button width={180} onClick={() => console.log('click')}>Visit website</Button>
                    <a href="#" className={styles.link}>View on GitHub</a>
                </div>
            </div>
        </FloatingCard>
    )
}

export default ProjectCard