import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { mathCalculations } from '../../common/utils';

export type InitialStateType = {
    currentValue: string;
    isRuntime: boolean;
    firstArg: number;
    mathOperator: MathOperatorsType;
    isMathOperatorJustPressed: boolean;
};
export type MathOperatorsType = '+' | '-' | '*' | '/' | '=' | '';

const initialState: InitialStateType = {
    currentValue: '0',
    firstArg: 0,
    isRuntime: false,
    mathOperator: '',
    isMathOperatorJustPressed: false,
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setMode(state, action: PayloadAction<boolean>) {
            state.currentValue = '0';
            state.firstArg = 0;
            state.mathOperator = '';
            state.isMathOperatorJustPressed = false;
            state.isRuntime = action.payload;
        },
        setCurrentValue(state, action: PayloadAction<string>) {
            if (state.isMathOperatorJustPressed) {
                state.isMathOperatorJustPressed = false;
            }
            state.currentValue = action.payload;
        },
        setMathOperator(state, action: PayloadAction<MathOperatorsType>) {
            if (!state.mathOperator) {
                state.mathOperator = action.payload;
                state.firstArg = Number(state.currentValue);
            } else {
                const secondArg = Number(state.currentValue);
                const total = mathCalculations(
                    state.mathOperator,
                    state.firstArg,
                    secondArg,
                );

                if (total) {
                    state.currentValue = total;
                }
                state.firstArg = Number(state.currentValue);
                state.mathOperator = action.payload;
            }
            if (!state.isMathOperatorJustPressed) {
                state.isMathOperatorJustPressed = true;
            }
        },
    },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { setMode, setCurrentValue, setMathOperator } = calculatorSlice.actions;
