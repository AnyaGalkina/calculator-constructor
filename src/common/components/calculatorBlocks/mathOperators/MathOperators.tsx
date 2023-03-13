import React, { ReactElement } from 'react';

import {
    useAppDispatch,
    useAppSelector,
    getIsRuntime,
    setMathOperator,
} from '../../../../store';
import { MathOperatorsType } from '../../../../store/calculator/calculatorSlice';
import { Button } from '../../button/Button';
import styles from '../ConstructorBlock.module.css';

const mathOperators: MathOperatorsType[] = ['/', '*', '-', '+'];

export const MathOperators = (): ReactElement => {
    const dispatch = useAppDispatch();

    const isRuntime = useAppSelector(getIsRuntime);

    return (
        <div className={styles.constructorItemBlock}>
            {mathOperators.map(operator => {
                const onOperatorClick = (): void => {
                    if (isRuntime) {
                        dispatch(setMathOperator(operator));
                    }
                };

                return (
                    <Button
                        key={operator}
                        buttonTitle={operator}
                        onButtonClick={onOperatorClick}
                        styleType="mini"
                    />
                );
            })}
        </div>
    );
};
