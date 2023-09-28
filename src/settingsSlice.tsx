import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export enum ESortType {
    Cheapest,
    Fastest,
    MostOptimal
}

interface ISettings {
    sortType: ESortType,
    companies: string[],
    connections: number[]
}

const initialState = { 
    sortType: ESortType.Cheapest,
    companies: [],
    connections: []
} as ISettings

const settingsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setSortType(state, action: PayloadAction<ESortType>) {
            state.sortType = action.payload;
        },
        toggleCompany(state, action: PayloadAction<string>) {
            if(!state.companies.includes(action.payload)) {
                state.companies.push(action.payload);
            } else {
                state.companies.splice(
                    state.companies.indexOf(action.payload), 1);
            }
        },
        toggleConnection(state, action: PayloadAction<number>) {
            if(!state.connections.includes(action.payload)) {
                state.connections.push(action.payload);
            } else {
                state.connections.splice(
                    state.connections.indexOf(action.payload), 1);
            }
        }
    },
})

export const { setSortType, 
    toggleCompany, 
    toggleConnection
} = settingsSlice.actions
export default settingsSlice.reducer

