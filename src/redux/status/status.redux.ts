import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const reducer = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.data = action.payload;
        }
    }
});
export const { setStatus } = reducer.actions;
export default reducer.reducer;