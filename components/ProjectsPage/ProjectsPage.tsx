import {PagePhases} from 'redux/app/appSlice'
import React from 'react'
import ProjectCard from 'components/ProjectsPage/ProjectCard/ProjectCard'
import Animated from 'components/Animated/Animated'
import styles from './ProjectsPage.module.scss'

const ProjectsPage: React.FC<{ phase: PagePhases }> = ({phase}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cardWrapper}>
                <Animated phase={phase}>
                    <ProjectCard
                        image={'/project1.png'}
                        title={'Artist portfolio website'}
                        usedTechnologies={['HTML / CSS / JavaScript', 'Next.js', 'Strapi CMS']}
                        websiteUrl={'https://maxgeorgievsky.ru'}
                        githubUrl={'https://github.com/maxim-green/georgievsky-next'}
                    />
                </Animated>
            </div>
            <div className={styles.cardWrapper}>
                <Animated phase={phase} delay={400}>
                    <ProjectCard
                        image={'/project2.png'}
                        title={'Meditation Mobile App'}
                        usedTechnologies={['JavaScript', 'React Native', 'Redux (Redux Toolkit)']}
                        websiteUrl={'https://github.com/maxim-green/meditationapp/releases/download/mobile/meditation-app.apk'}
                        githubUrl={'https://github.com/maxim-green/meditationapp'}
                    />
                </Animated>
            </div>
            <div className={styles.cardWrapper}>
                <Animated phase={phase} delay={200}>
                    <ProjectCard
                        image={'/project3.png'}
                        title={'Meditation Mobile App'}
                        usedTechnologies={['HTML / SCSS / JavaScript', 'React', 'Redux', 'Express', 'MongoDB', 'Socket.io']}
                        websiteUrl={'https://bind.maxgeorgievsky.ru'}
                        githubUrl={'https://github.com/maxim-green/react-social-network'}
                    />
                </Animated>
            </div>
        </div>
    )
}

export default ProjectsPage