import React, { ReactElement } from 'react';

import { getCurrentValue, useAppSelector } from '../../../../store';

import styles from './Display.module.css';

const MAX_CURRENT_VALUE_LARGE_FONT_SIZE = 8;

export const Display = (): ReactElement => {
    const currentValue = useAppSelector(getCurrentValue);

    return (
        <div
            className={`${styles.display} ${
                currentValue.toString().length > MAX_CURRENT_VALUE_LARGE_FONT_SIZE &&
                styles.smallSizeFont
            }`}
        >
            {currentValue}
        </div>
    );
};
