import React, { ReactElement } from 'react';

import {
    getCurrentValue,
    getIsMathOperatorJustPressed,
    getIsRuntime,
    setCurrentValue,
    useAppDispatch,
    useAppSelector,
} from '../../../../store';
import { Button } from '../../button/Button';
import styles from '../ConstructorBlock.module.css';

const FLOAT_SYMBOL = '.';
const MAX_CURRENT_VALUE_LENGTH = 17;
const numbersArr = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', FLOAT_SYMBOL];

export const NumbersContainer = (): ReactElement => {
    const dispatch = useAppDispatch();

    const isRuntime = useAppSelector(getIsRuntime);
    const currentValue = useAppSelector(getCurrentValue);
    const isMathOperatorJustPressed = useAppSelector(getIsMathOperatorJustPressed);

    return (
        <div className={styles.constructorItemBlock}>
            {numbersArr.map(number => {
                const onNumberClick = (): void => {
                    if (isRuntime) {
                        // If rendered value length exceeds display width
                        if (currentValue.length > MAX_CURRENT_VALUE_LENGTH) {
                            return;
                        }
                        // If rendered value has float number already
                        if (
                            currentValue.includes(FLOAT_SYMBOL) &&
                            number === FLOAT_SYMBOL
                        ) {
                            return;
                        }
                        // start render new value
                        if (
                            (currentValue === '0' && number !== FLOAT_SYMBOL) ||
                            isMathOperatorJustPressed
                        ) {
                            dispatch(setCurrentValue(number));
                        } else {
                            dispatch(setCurrentValue(currentValue + number));
                        }
                    }
                };

                return (
                    <Button
                        key={number}
                        onButtonClick={onNumberClick}
                        buttonTitle={number === FLOAT_SYMBOL ? ',' : number}
                        styleType={number === '0' ? 'large' : ''}
                    />
                );
            })}
        </div>
    );
};
