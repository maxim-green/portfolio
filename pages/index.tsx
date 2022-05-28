import type {NextPage} from 'next'
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/about')
    }, [router])
  return (
    <div/>
  )
}

export default Home
