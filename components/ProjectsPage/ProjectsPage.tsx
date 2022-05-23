import {PagePhases} from 'redux/app/appSlice'
import React from 'react'
import ProjectCard from 'components/ProjectsPage/ProjectCard/ProjectCard'
import Animated from 'components/Animated/Animated'

const ProjectsPage: React.FC<{phase: PagePhases}> = ({phase}) => {
    return (
        <div  style={{margin: '80px auto 0', width: '980px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <Animated phase={phase}>
                <ProjectCard/>
            </Animated>
            <Animated phase={phase} delay={200}>
                <ProjectCard/>
            </Animated>
            <Animated phase={phase} delay={400}>
                <ProjectCard/>
            </Animated>
        </div>
    )
}

export default ProjectsPage