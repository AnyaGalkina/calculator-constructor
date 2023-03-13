import React, { ReactElement, useCallback } from 'react';

import {
    useAppDispatch,
    useAppSelector,
    getIsRuntime,
    setMathOperator,
} from '../../../../store';
import { Button } from '../../button/Button';
import styles from '../ConstructorBlock.module.css';

export const EqualButton = (): ReactElement => {
    const dispatch = useAppDispatch();

    const isRuntime = useAppSelector(getIsRuntime);

    const onResultClick = useCallback((): void => {
        if (isRuntime) {
            dispatch(setMathOperator('='));
        }
    }, [isRuntime, dispatch]);

    return (
        <div className={styles.constructorItemBlock}>
            <Button buttonTitle="=" onButtonClick={onResultClick} styleType="result" />
        </div>
    );
};
