import React, { ReactElement, useCallback } from 'react';

import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from 'react-redux';

import { getIsRuntime, setMode, useAppDispatch } from '../../store';

import { ToggleButton } from './toggleButton/ToggleButton';
import styles from './ToggleContainer.module.css';

export const ToggleContainer = (): ReactElement => {
    const dispatch = useAppDispatch();
    const isRuntime = useSelector(getIsRuntime);

    const onRuntimeClick = useCallback((): void => {
        dispatch(setMode(true));
    }, [isRuntime, dispatch]);
    const onConstructorClick = useCallback((): void => {
        dispatch(setMode(false));
    }, [isRuntime, dispatch]);

    return (
        <div className={styles.toggleContainer}>
            <div className={styles.toggleBlock}>
                <ToggleButton
                    toggleTitle="Runtime"
                    icon={<VisibilityIcon style={{ width: '16px' }} />}
                    onToggleClick={onRuntimeClick}
                    isActive={isRuntime}
                />
                <ToggleButton
                    toggleTitle="Constructor"
                    icon={<CodeIcon style={{ width: '16px' }} />}
                    onToggleClick={onConstructorClick}
                    isActive={!isRuntime}
                />
            </div>
        </div>
    );
};
