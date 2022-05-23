import React from 'react'
import Animated from 'components/Animated/Animated'
import {PagePhases} from 'redux/app/appSlice'
import SkillCard from 'components/SkillsPage/SkillCard/SkillCard'

const SkillsPage: React.FC<{phase: PagePhases}> = ({phase}) => {
    return (
        <div style={{margin: '0 auto', width: 780, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div style={{margin: 15}}>
                <Animated phase={phase}>
                    <SkillCard
                        image={'/html-logo.svg'}
                        title={'HTML'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                    />
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={100}>
                    <SkillCard
                        image={'/sass-logo.svg'}
                        title={'SASS / SCSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                    />
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={200}>
                    <SkillCard
                        image={'/js-logo.svg'}
                        title={'JavaScript'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                    />
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={300}>
                    <SkillCard
                        image={'/react-logo.svg'}
                        title={'React / React Native'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                    />
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={400}>
                    <SkillCard
                        image={'/redux-logo.svg'}
                        title={'Redux'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                    />
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={500}>
                    <SkillCard
                        image={'/node-logo.svg'}
                        title={'Node.js'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                    />
                </Animated>
            </div>
        </div>
    )
}

export default SkillsPage