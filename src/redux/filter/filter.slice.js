import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
    },
})

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;