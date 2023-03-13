import {
    calculatorReducer,
    InitialStateType,
    setCurrentValue,
    setMathOperator,
    setMode,
} from '../calculatorSlice';

let state: InitialStateType;

test('math operator should be set', () => {
    state = {
        currentValue: '5',
        firstArg: 10,
        isRuntime: false,
        mathOperator: '',
        isMathOperatorJustPressed: false,
    };

    const newState = calculatorReducer(state, setMathOperator('-'));

    expect(newState.mathOperator).toBe('-');
    expect(newState.isMathOperatorJustPressed).toBe(true);
});

beforeEach(() => {
    state = {
        currentValue: '5',
        firstArg: 10,
        isRuntime: false,
        mathOperator: '+',
        isMathOperatorJustPressed: true,
    };
});

test('current value should be set', () => {
    const newValue = '-12,54';

    const newState = calculatorReducer(state, setCurrentValue(newValue));

    expect(newState.currentValue).toBe(newValue);
    expect(newState.isMathOperatorJustPressed).toBeFalsy();
});

test('current value  should be incremented', () => {
    const newState = calculatorReducer(state, setMathOperator('='));

    expect(newState.currentValue).toBe('15');
});

test('isRuntime mode should be changed to true', () => {
    const newState = calculatorReducer(state, setMode(true));

    expect(newState.isRuntime).toBeTruthy();
    expect(newState.currentValue).toBe('0');
    expect(newState.firstArg).toBe(0);
    expect(newState.mathOperator).toBe('');
    expect(newState.isMathOperatorJustPressed).toBe(false);
});
