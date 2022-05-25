import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import React from 'react'
import Layout from 'components/Layout/Layout'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Head>
            <title>Max Georgievsky - Frontend developer</title>
        </Head>
        <svg style={{position: 'absolute', width: 0, height: 0}}>
            <defs>
                <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='66%'>
                    <stop offset='0%' stopColor='#e0c3fc'/>
                    <stop offset='100%' stopColor='#8ec5fc'/>
                </linearGradient>
            </defs>
        </svg>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </Provider>
}

export default MyApp
