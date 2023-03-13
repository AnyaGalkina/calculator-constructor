import { MathOperatorsType } from '../../store/calculator/calculatorSlice';

export const mathCalculations = (
    mathOperator: Omit<MathOperatorsType, '=' & ''>,
    firstArg: number,
    secondArg: number,
): string | undefined => {
    switch (mathOperator) {
        case '+':
            return (firstArg + secondArg).toString();
        case '-':
            return (firstArg - secondArg).toString();
        case '*':
            return (firstArg * secondArg).toString();
        case '/':
            if (secondArg !== 0) {
                return (firstArg / secondArg).toString();
            }

            return 'Error';
        default:
    }
};
