import React, { memo, ReactElement } from 'react';

import { useAppSelector, getIsRuntime } from '../../../store';

import styles from './Button.module.css';

type PropsType = {
    buttonTitle: string;
    onButtonClick: () => void;
    styleType: 'mini' | 'result' | 'large' | '';
};

export const Button = memo(
    ({ buttonTitle, onButtonClick, styleType }: PropsType): ReactElement => {
        const isRuntime = useAppSelector(getIsRuntime);

        const finalClassName = `${styles.button} ${isRuntime && styles.isActive}

    ${
        styleType === 'mini' // eslint-disable-line
            ? styles.mini
            : styleType === 'large' // eslint-disable-line
            ? styles.large
            : styleType === 'result'
            ? styles.result
            : styles.default
    } `;

        return (
            <button className={finalClassName} onClick={onButtonClick} type="button">
                {buttonTitle}
            </button>
        );
    },
);
