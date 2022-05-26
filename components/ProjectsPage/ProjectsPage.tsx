import {PagePhases} from 'redux/app/appSlice'
import React from 'react'
import ProjectCard from 'components/ProjectsPage/ProjectCard/ProjectCard'
import Animated from 'components/Animated/Animated'
import project1 from '../../public/project1.png'
import project2 from '../../public/project2.png'
import project3 from '../../public/project3.png'

const ProjectsPage: React.FC<{phase: PagePhases}> = ({phase}) => {
    return (
        <div  style={{margin: '0 auto 80px', width: '980px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', flexGrow: 1}}>
            <Animated phase={phase}>
                <ProjectCard
                    image={'/project1.png'}
                    title={'Artist portfolio website'}
                    usedTechnologies={['HTML / CSS / JavaScript', 'Next.js', 'Strapi CMS']}
                    websiteUrl={'https://maxgeorgievsky.ru'}
                    githubUrl={'https://github.com/maxim-green/georgievsky-next'}
                />
            </Animated>
            <Animated phase={phase} delay={400}>
                <ProjectCard
                    image={'/project2.png'}
                    title={'Meditation Mobile App'}
                    usedTechnologies={['JavaScript', 'React Native', 'Redux (Redux Toolkit)']}
                    websiteUrl={'https://github.com/maxim-green/meditationapp/releases/download/mobile/meditation-app.apk'}
                    githubUrl={'https://github.com/maxim-green/meditationapp'}
                />
            </Animated>
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
    )
}

export default ProjectsPage