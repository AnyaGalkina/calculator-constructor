import React, { ReactElement } from 'react';

import { DragAndDropContainer, ToggleContainer } from '../../../features';

import styles from './Main.module.css';

export const Main = (): ReactElement => {
    return (
        <div className={styles.mainContainer}>
            <ToggleContainer />
            <DragAndDropContainer />
        </div>
    );
};
