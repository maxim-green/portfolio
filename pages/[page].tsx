import {useRouter} from 'next/router'
import About from '../components/About'
import React, {useEffect} from 'react'
import useDelayedUnmounting from '../hooks/useDelayedUnmounting'
import {useDispatch, useSelector} from 'react-redux'
import {isPage, setPage, setPhase} from '../redux/app/appSlice'
import {RootState} from '../redux/store'

const Page = () => {
    const [phase, mount, unmount] = useDelayedUnmounting(500)
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
    console.log(currentPhase)
    // todo animation not working on second mounting
    // todo component never receives 'unmounted' props. because of this styles never reset. maybe need to use keyframes instead of transition?
    if (currentPage === 'about') return <About phase={currentPhase}/>
    return <div>{currentPage} - {currentPhase}</div>
}

export default Page
