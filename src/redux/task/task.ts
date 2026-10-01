import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    counts: {
        total: 0,
        todo: 0,
        in_progress: 0,
        completed: 0,
        delayed: 0,
        cancelled: 0
    }
};

const taskReducer = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload.data;
            state.counts = action.payload.counts;
        },
    }
})

export const { setTasks } = taskReducer.actions;
export default taskReducer.reducer;