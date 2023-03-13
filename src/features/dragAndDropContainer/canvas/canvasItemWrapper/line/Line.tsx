import React, { ReactElement } from 'react';

import styles from '../CanvasItemWrapper.module.css';

type PropsType = {
    isDraggedOver: boolean;
};

export const Line = ({ isDraggedOver }: PropsType): ReactElement => {
    return <div className={isDraggedOver ? styles.line : ''} />;
};
