import React, { memo, ReactElement } from 'react';

import { setContent } from '../../../common/utils';
import {
    addItem,
    getCalculatorBlocksCanvas,
    useAppDispatch,
    useAppSelector,
} from '../../../store';

import styles from './Canvas.module.css';
import { CanvasItemWrapper } from './canvasItemWrapper/CanvasItemWrapper';
import { EmptyCanvas } from './empyCanvas/EmptyCanvas';

type PropsType = {
    isDragging: boolean;
};

export const Canvas = memo(({ isDragging }: PropsType): ReactElement => {
    const dispatch = useAppDispatch();

    const calculatorBlocks = useAppSelector(getCalculatorBlocksCanvas);

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
    };

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        dispatch(addItem());
    };

    return (
        <div
            className={styles.canvasBlock}
            onDrop={e => onDropHandler(e)}
            onDragOver={e => onDragOverHandler(e)}
        >
            {calculatorBlocks.length === 0 ? (
                <EmptyCanvas
                    isDragging={isDragging}
                    calculatorBlocks={calculatorBlocks}
                />
            ) : (
                <>
                    {calculatorBlocks.map(({ id, name, isDraggedOver }, index) => {
                        return (
                            <CanvasItemWrapper
                                key={id}
                                isDraggedOver={isDraggedOver}
                                name={name}
                                id={id}
                                index={index}
                            >
                                {setContent(name)}
                            </CanvasItemWrapper>
                        );
                    })}
                </>
            )}
        </div>
    );
});
