import { RootState } from '../store';

export const getCurrentValue = (state: RootState): string =>
    state.calculatorReducer.currentValue;

export const getIsRuntime = (state: RootState): boolean =>
    state.calculatorReducer.isRuntime;

export const getIsMathOperatorJustPressed = (state: RootState): boolean =>
    state.calculatorReducer.isMathOperatorJustPressed;
