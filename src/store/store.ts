import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { calculatorReducer } from './calculator/calculatorSlice';
import { constructorReducer } from './constructor/constructorSlice';

export const store = configureStore({
    reducer: { calculatorReducer, constructorReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
