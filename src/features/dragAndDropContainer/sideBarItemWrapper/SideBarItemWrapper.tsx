import React, { memo, ReactElement } from 'react';

import stylesConstructor from '../../../common/components/calculatorBlocks/ConstructorBlock.module.css';
import { useAppDispatch, setCurrentItemData } from '../../../store';

type PropsType = {
    children: React.ReactNode | React.ReactElement;
    id: number;
    index: number;
    isDragged: boolean;
    setIsDragging: (isDragging: boolean) => void;
};

export const SideBarItemWrapper = memo(
    ({ index, id, children, setIsDragging, isDragged }: PropsType): ReactElement => {
        const dispatch = useAppDispatch();

        const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>): void => {
            e.currentTarget.style.cursor = 'move'; // eslint-disable-line
            dispatch(setCurrentItemData({ id, index, zone: 'sideBar' }));
            setIsDragging(true);
        };

        const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>): void => { // eslint-disable-line
            setIsDragging(false);
        };

        return (
            <div
                className={`${stylesConstructor.constructorItemContainer} ${
                    isDragged && stylesConstructor.draggedBlock
                }`}
                draggable
                onDragStart={e => onDragStartHandler(e)}
                onDragEnd={e => onDragEndHandler(e)}
            >
                {children}
            </div>
        );
    },
);
