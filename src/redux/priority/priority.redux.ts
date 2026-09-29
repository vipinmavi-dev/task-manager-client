import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}
const prioritySlice = createSlice({
    name: "priority",
    initialState,
    reducers: {
        setPriority: (state, action) => {
            state.data = action.payload;
        }
    }
});
export const { setPriority } = prioritySlice.actions;
export default prioritySlice.reducer;