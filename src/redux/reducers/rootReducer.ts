// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import tvReducer from './TvReducer';
import { TvState } from '../types/TvTypes';

const rootReducer = combineReducers({
  tv: tvReducer,
});


export type RootState = {
  tv: TvState;
};

export default rootReducer;
