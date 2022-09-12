import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';

// Esto crea un Store de redux
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});