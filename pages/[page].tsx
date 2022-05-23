import {useRouter} from 'next/router'
import AboutPage from 'components/AboutPage/AboutPage'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {isPage, setPage, setPhase} from 'redux/app/appSlice'
import {RootState} from 'redux/store'
import SkillsPage from 'components/SkillsPage/SkillsPage'
import ProjectsPage from 'components/ProjectsPage/ProjectsPage'

const Page = () => {
    const {page} = useRouter().query
    const currentPage = useSelector((state: RootState) => state.app.page)
    const currentPhase = useSelector((state:RootState) => state.app.phase)

    const dispatch = useDispatch()
    useEffect(() => {
        if (isPage(page)) {

            if (currentPhase === 'mounted') dispatch(setPhase('unmounting'))

            const t2 = setTimeout(() => {
                dispatch(setPage(page))
                dispatch(setPhase('mounting'))
            },1000)

            const t3 = setTimeout(() => {
                dispatch(setPhase('mounted'))
            }, 2000)

            return () => {
                clearTimeout(t2)
                clearTimeout(t3)
            }

        }
    },[page])

    if (currentPage === 'about') return <AboutPage phase={currentPhase}/>
    if (currentPage === 'skills') return <SkillsPage phase={currentPhase}/>
    if (currentPage === 'projects') return <ProjectsPage phase={currentPhase}/>
    return <div>{currentPage} - {currentPhase}</div>
}

export default Page
