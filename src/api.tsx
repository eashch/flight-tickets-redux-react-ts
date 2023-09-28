import { createAsyncThunk, createSlice, createEntityAdapter, configureStore } from '@reduxjs/toolkit';
import settingsSlice from './settingsSlice';

export interface ITicketTime {
    startTime: string;
    endTime: string;
}

export interface ITicket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: ITicketTime;
    duration: number;
    date: string;
    connectionAmount: number;
}

export enum EAirlines {
    redWings = "Red Wings",
    s7 = "S7 Airlines",
    pobeda = "Pobeda"
}

const fakeTicketsData = {
    tickets: [
        {
            id: 0,
            from: "SVO",
            to: "LED",
            company: "Red Wings",
            price: 30000,
            currency: 'RUB',
            time: {
                startTime: "0:00",
                endTime: "1:00",
            },
            duration: 60,
            date: "01.01.2024",
            connectionAmount: 0
        },
        {
            id: 1,
            from: "SVO",
            to: "LED",
            company: "Red Wings",
            price: 35000,
            currency: 'RUB',
            time: {
                startTime: "2:00",
                endTime: "3:10",
            },
            duration: 70,
            date: "01.01.2024",
            connectionAmount: 1
        },
        {
            id: 2,
            from: "SVO",
            to: "LED",
            company: "S7 Airlines",
            price: 36000,
            currency: 'RUB',
            time: {
                startTime: "4:00",
                endTime: "9:00",
            },
            duration: 300,
            date: "01.01.2024",
            connectionAmount: 3
        },
        {
            id: 3,
            from: "SVO",
            to: "LED",
            company: "S7 Airlines",
            price: 100000,
            currency: 'RUB',
            time: {
                startTime: "0:00",
                endTime: "0:30",
            },
            duration: 30,
            date: "01.01.2024",
            connectionAmount: 0
        },
        {
            id: 4,
            from: "SVO",
            to: "LED",
            company: "Pobeda",
            price: 5000,
            currency: 'RUB',
            time: {
                startTime: "0:00",
                endTime: "20:00",
            },
            duration: 1200,
            date: "01.01.2024",
            connectionAmount: 2
        },
    ]
};

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTicketsByParams',
    async () => {
        return fakeTicketsData;
    }
);

const ticketsAdapter = createEntityAdapter<ITicket>({
    selectId: (ticket) => ticket.id
})

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: ticketsAdapter.getInitialState(),
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTickets.fulfilled, (state, action) => {
                ticketsAdapter.setAll(state, 
                    action.payload.tickets as ITicket[]);
            })
    }
})

export const ticketsSelectors = ticketsAdapter.getSelectors<RootState>(
    (state) => state.tickets
)

export const store = configureStore({
    reducer: {
        tickets: ticketsSlice.reducer,
        settings: settingsSlice
    },
})
  
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

store.dispatch(fetchTickets());