import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, //false -> pending, true-> done
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => void(
             state.fetchDone = true
        ),
        markFetchingStarted: (state) => void(
            state.currentlyFetching = true
        ),
        markFetchingCompleted: (state) => void(
            state.currentlyFetching = false
        )
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;