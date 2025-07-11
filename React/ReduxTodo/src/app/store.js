import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store=configureStore({  // it always takes object as argument
    reducer:todoReducer,
});