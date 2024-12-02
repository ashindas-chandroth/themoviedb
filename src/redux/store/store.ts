import { configureStore } from '@reduxjs/toolkit';
import tvReducer from '../reducers/TvReducer';
import rootReducer from '../reducers/rootReducer';




const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
