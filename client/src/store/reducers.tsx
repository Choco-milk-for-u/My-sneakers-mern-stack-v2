import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import statusRed from './statusState';
import sneakersRed from './sneakersState';

const reducers = combineReducers({
    status:  statusRed,
    sneaker: sneakersRed,
})

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({reducer: reducers});