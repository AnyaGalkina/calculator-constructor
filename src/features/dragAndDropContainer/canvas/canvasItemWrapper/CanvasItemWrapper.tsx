import React, { memo, ReactElement } from 'react';

import {
    removeItem,
    setCurrentItemData,
    setDragOver,
    setUpperItemPosition,
    useAppDispatch,
    useAppSelector,
    getIsRuntime,
} from '../../../../store';

import styles from './CanvasItemWrapper.module.css';
import { Line } from './line/Line';

type PropsType = {
    name: string;
    index: number;
    id: number;
    isDraggedOver: boolean;
    children: React.ReactNode | React.ReactElement;
};

export const CanvasItemWrapper = memo(
    ({ name, index, id, isDraggedOver, children }: PropsType): ReactElement => {
        const dispatch = useAppDispatch();

        const isRuntime = useAppSelector(getIsRuntime);

        const isItemDraggable = name !== 'display' && !isRuntime;

        const onDragStartHandler = (
            e: React.DragEvent<HTMLDivElement>,
            id: number,
            index: number,
        ): void => {
            e.currentTarget.style.cursor = 'move'; // eslint-disable-line
            dispatch(setCurrentItemData({ id, index, zone: 'canvas' }));
        };

        const onDragLeaveSetItemHandler = (
            e: React.DragEvent<HTMLDivElement>,
            index: number,
            isDraggedOver: boolean,
        ): void => {
            if (isDraggedOver) {
                dispatch(setDragOver({ index, isDraggedOver: false }));
            }
        };

        const onDragOverSetItemHandler = (
            e: React.DragEvent<HTMLDivElement>,
            index: number,
            isDraggedOver: boolean,
        ): void => {
            e.preventDefault();
            if (!isDraggedOver) {
                dispatch(setDragOver({ index, isDraggedOver: true }));
            }
        };

        const onDropSetItemHandler = (
            e: React.DragEvent<HTMLDivElement>,
            index: number,
            isDraggedOver: boolean,
        ): void => {
            if (isDraggedOver) {
                dispatch(setDragOver({ index, isDraggedOver: false }));
            }
            dispatch(setUpperItemPosition(index));
        };

        const onDoubleClickHandler = (): void => {
            if (!isRuntime) {
                dispatch(removeItem({ id, index }));
            }
        };

        return (
            <div
                draggable={isItemDraggable && true}
                onDragStart={(e): void => onDragStartHandler(e, id, index)}
                onDragLeave={(e): void =>
                    onDragLeaveSetItemHandler(e, index, isDraggedOver)
                }
                onDrop={(e): void => onDropSetItemHandler(e, index, isDraggedOver)}
                onDragOver={e => onDragOverSetItemHandler(e, index, isDraggedOver)}
                onDoubleClick={onDoubleClickHandler}
                className={`${styles.constructorItemBlock} ${
                    !isItemDraggable && styles.displayContainer
                }`}
            >
                {children}
                <Line isDraggedOver={isDraggedOver} />
            </div>
        );
    },
);
