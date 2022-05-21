import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import React from 'react'
import Layout from '../components/layout'
import {Provider} from 'react-redux'
import {store} from '../redux/store'

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </Provider>
}

export default MyApp
