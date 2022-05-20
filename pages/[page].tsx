import {useRouter} from 'next/router'
import About from '../components/About'
import React from 'react'

const Page = () => {
    const {page} = useRouter().query
    if (page === 'about') return <About/>
    return <div>{page}</div>
}



export default Page