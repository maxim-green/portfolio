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
}

const initialState: AppState = {
    page: 'about',
    phase: 'unmounted'
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

export const {setPage, setPhase} = appSlice.actions
export default appSlice.reducer
