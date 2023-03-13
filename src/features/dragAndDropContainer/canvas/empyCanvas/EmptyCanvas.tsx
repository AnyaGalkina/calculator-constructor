import React, { ReactElement } from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { ItemType } from '../../../../store/constructor/constructorSlice';

import styles from './EmptyCanvas.module.css';

type PropsType = {
    isDragging: boolean;
    calculatorBlocks: ItemType[];
};

export const EmptyCanvas = ({
    isDragging,
    calculatorBlocks,
}: PropsType): ReactElement => {
    const isCanvasColored = calculatorBlocks.length === 0 && isDragging;

    return (
        <div
            className={`${styles.canvas} ${isCanvasColored && styles.canvasDraggingMode}`}
        >
            <div className={styles.infoContainer}>
                <div>
                    <AddPhotoAlternateIcon />
                </div>
                <div>
                    <div className={styles.blueText}>Перетащи сюда</div>
                    <div className={styles.grayText}>любой элемент из левой панели</div>
                </div>
            </div>
        </div>
    );
};
