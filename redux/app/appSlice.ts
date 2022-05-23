import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {stat} from 'fs'

export type Pages = 'about' | 'skills' | 'projects' | 'contacts'
export const isPage = (str: any): str is Pages => ['about', 'skills', 'projects', 'contacts'].includes(str)
export type PagePhases = 'mounted' | 'mounting' | 'unmounted' | 'unmounting'

export type Page = {
    name: Pages
    title: string
    phase: PagePhases
}

export type AppState = {
    page: Pages
    phase: PagePhases
    // pages: Page[]
}

const initialState: AppState = {
    page: 'about',
    phase: 'unmounted'
    // pages: [
    //     {name: 'about', title: 'AboutPage me', phase: 'unmounted'},
    //     {name: 'skills', title: 'Skills', phase: 'unmounted'},
    //     {name: 'projects', title: 'Projects', phase: 'unmounted'},
    //     {name: 'contacts', title: 'Contacts', phase: 'unmounted'},
    // ]
}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<Pages>) => {
            state.page = action.payload
        },
        setPhase: (state, action: PayloadAction<PagePhases>) => {
            state.phase = action.payload
        }
    }
})

// openPage: (state, action: PayloadAction<Pages>) => {
//
//     const PAGE_TRANSITION_SPEED = 300
//
//     // immediately start unmounting current page
//     state.pages = state.pages.map(page => {
//         if (page.name !== action.payload && page.phase === 'mounted') return {...page, phase: 'unmounting'}
//         return page
//     })
//
//     // end unmounting current page
//     // start mounting target page
//     setTimeout(() => {
//         state.pages = state.pages.map(page => {
//             if (page.name === action.payload && page.phase === 'unmounted') return {...page, phase: 'mounting'}
//             if (page.name !== action.payload && page.phase === 'unmounting') return {...page, phase: 'unmounted'}
//             return page
//         })
//     }, PAGE_TRANSITION_SPEED)
//
//     // end mounting target page
//     setTimeout(() => {
//         state.pages = state.pages.map(page => {
//             if (page.name === action.payload) return {...page, phase: 'mounted'}
//             return page
//         })
//     }, PAGE_TRANSITION_SPEED * 2)
//
// }

export const {setPage, setPhase} = appSlice.actions
export default appSlice.reducer
