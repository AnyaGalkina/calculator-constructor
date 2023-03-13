import React, { memo, ReactElement } from 'react';

import styles from './ToggleButton.module.css';

type PropsType = {
    toggleTitle: string;
    icon: ReactElement;
    onToggleClick: () => void;
    isActive: boolean;
};

export const ToggleButton = memo(
    ({ toggleTitle, icon, isActive, onToggleClick }: PropsType): ReactElement => {
        return (
            <button
                type="button"
                onClick={onToggleClick}
                className={`${styles.toggleButton} ${
                    isActive && styles.activeToggleButton
                }`}
            >
                <div className={isActive ? styles.activeIcon : ''}>{icon}</div>
                <div>{toggleTitle}</div>
            </button>
        );
    },
);
