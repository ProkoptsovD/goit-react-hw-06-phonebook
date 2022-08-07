import { createSlice } from '@reduxjs/toolkit';
import { filterActions } from 'redux/filter/filter.actions';

const initialState = {
    value: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    extraReducers: {
        [filterActions.setFilter](state, action) {
            state.value = action.payload;
        },
    },
})

export default filterSlice.reducer;