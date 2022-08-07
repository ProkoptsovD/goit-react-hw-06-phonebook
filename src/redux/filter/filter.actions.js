import { createAction } from '@reduxjs/toolkit'

const setFilter = createAction('[Filter] Add filter value');

export const filterActions = {
    setFilter,
}