import React from 'react'
import Animated from 'components/Animated/Animated'
import {PagePhases} from 'redux/app/appSlice'
import SkillCard from 'components/SkillsPage/SkillCard/SkillCard'
import styles from './SkillsPage.module.scss'

const SkillsPage: React.FC<{ phase: PagePhases }> = ({phase}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cardWrapper}>
                <Animated phase={phase}>
                    <SkillCard
                        image={'/html-logo.svg'}
                        title={'HTML'}
                        percentage={90}
                    >
                        <ul className={styles.descriptionList}>
                            <li className={styles.descriptionItem}>Basics</li>
                            <li className={styles.descriptionItem}>Semantic HTML</li>
                            <li className={styles.descriptionItem}>Forms</li>
                            <li className={styles.descriptionItem}>Accessibility</li>
                        </ul>
                    </SkillCard>
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={100}>
                    <SkillCard
                        image={'/sass-logo.svg'}
                        title={'CSS / SASS / SCSS'}
                        percentage={90}
                    >
                        <ul className={styles.descriptionList}>
                            <li className={styles.descriptionItem}>Basics</li>
                            <li className={styles.descriptionItem}>Box model</li>
                            <li className={styles.descriptionItem}>Flexbox</li>
                            <li className={styles.descriptionItem}>CSS Grid</li>
                            <li className={styles.descriptionItem}>Media queries</li>
                            <li className={styles.descriptionItem}>Animations</li>
                            <li className={styles.descriptionItem}>CSS Modules</li>
                        </ul>
                    </SkillCard>
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={200}>
                    <SkillCard
                        image={'/js-logo.svg'}
                        title={'JavaScript'}
                        percentage={80}
                    >
                        <ul className={styles.descriptionList}>
                            <li className={styles.descriptionItem}>Basics</li>
                            <li className={styles.descriptionItem}>DOM manipulation</li>
                            <li className={styles.descriptionItem}>ES6 features</li>
                            <li className={styles.descriptionItem}>Asynchronous JS</li>
                            <li className={styles.descriptionItem}>Scope</li>
                            <li className={styles.descriptionItem}>Prototypes</li>
                            <li className={styles.descriptionItem}>Typescript</li>
                        </ul>
                    </SkillCard>
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={300}>
                    <SkillCard
                        image={'/react-logo.svg'}
                        title={'React / React Native'}
                        percentage={70}
                    >
                        <ul className={styles.descriptionList}>
                            <li className={styles.descriptionItem}>JSX, components, props</li>
                            <li className={styles.descriptionItem}>State and Lifecycle</li>
                            <li className={styles.descriptionItem}>Controlled components</li>
                            <li className={styles.descriptionItem}>Context</li>
                            <li className={styles.descriptionItem}>React Hooks</li>
                            <li className={styles.descriptionItem}>Usage with Typescript</li>
                        </ul>
                    </SkillCard>
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={400}>
                    <SkillCard
                        image={'/redux-logo.svg'}
                        title={'Redux'}
                        percentage={70}
                    >
                        <ul className={styles.descriptionList}>
                            <li className={styles.descriptionItem}>Store, state, dispatch</li>
                            <li className={styles.descriptionItem}>Actions and reducers</li>
                            <li className={styles.descriptionItem}>Redux toolkit</li>
                            <li className={styles.descriptionItem}>Usage with Typescript</li>
                        </ul>
                    </SkillCard>
                </Animated>
            </div>
            <div style={{margin: 15}}>
                <Animated phase={phase} delay={500}>
                    <SkillCard
                        image={'/node-logo.svg'}
                        title={'Node.js'}
                        percentage={40}
                    >
                        <ul className={styles.descriptionList}>
                            <li className={styles.descriptionItem}>npm / yarn</li>
                            <li className={styles.descriptionItem}>npm scripts</li>
                            <li className={styles.descriptionItem}>Express</li>
                            <li className={styles.descriptionItem}>Mongoose</li>
                        </ul>
                    </SkillCard>
                </Animated>
            </div>
        </div>
    )
}

export default SkillsPage
