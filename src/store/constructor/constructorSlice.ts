import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
    calculatorBlocks: CalculatorBlocksType[];
    currentItemId: number;
    currentItemPosition: number;
    currentItemZone: ZoneType;
    upperItemPosition: number;
};

export type ZoneType = 'sideBar' | 'canvas' | '';

export type CalculatorBlocksType = {
    id: number;
    title: string;
    items: ItemType[];
};

export type ItemType = {
    id: number;
    name: string;
    isDragged: boolean;
    isDraggedOver: boolean;
};

export const initialState: InitialStateType = {
    calculatorBlocks: [
        {
            id: 1,
            title: 'sideBar',
            items: [
                { id: 1, name: 'display', isDragged: false, isDraggedOver: false },
                { id: 2, name: 'operators', isDragged: false, isDraggedOver: false },
                { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
            ],
        },
        { id: 2, title: 'canvas', items: [] },
    ],
    currentItemId: 0,
    currentItemPosition: 0,
    upperItemPosition: 0,
    currentItemZone: '',
};

export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        setCurrentItemData: (
            state,
            action: PayloadAction<{
                id: number;
                index: number;
                zone: ZoneType;
            }>,
        ) => {
            state.currentItemId = action.payload.id;
            state.currentItemPosition = action.payload.index;
            state.currentItemZone = action.payload.zone;
        },
        setUpperItemPosition: (state, action: PayloadAction<number>) => {
            state.upperItemPosition = action.payload;
        },
        setDragOver: (
            state,
            action: PayloadAction<{ index: number; isDraggedOver: boolean }>,
        ) => {
            state.calculatorBlocks[1].items[action.payload.index].isDraggedOver =
                action.payload.isDraggedOver;
        },
        removeItem: (state, action: PayloadAction<{ id: number; index: number }>) => {
            const canvasArray = state.calculatorBlocks[1].items;
            const sideBarArray = state.calculatorBlocks[0].items;

            sideBarArray[action.payload.id - 1].isDragged = false;
            canvasArray.splice(action.payload.index, 1);
        },
        addItem: state => {
            const canvasArray = state.calculatorBlocks[1].items;
            const sideBarArray = state.calculatorBlocks[0].items;
            const { currentItemId, currentItemPosition, currentItemZone } = state;

            const droppedItem = sideBarArray[currentItemId! - 1];

            droppedItem.isDragged = true;

            const indexUpperItem = state.upperItemPosition;

            // sort
            if (currentItemZone === 'canvas') {
                // remove from array
                canvasArray.splice(currentItemPosition, 1);

                // add to array
                if (currentItemPosition > indexUpperItem) {
                    canvasArray.splice(indexUpperItem + 1, 0, droppedItem);
                } else {
                    canvasArray.splice(indexUpperItem, 0, droppedItem);
                }
                // add to array first time
            } else if (droppedItem.name === 'display') {
                canvasArray.unshift(droppedItem);
            } else {
                canvasArray.splice(indexUpperItem + 1, 0, droppedItem);
            }
        },
    },
});

export const constructorReducer = constructorSlice.reducer;
export const {
    addItem,
    setUpperItemPosition,
    setDragOver,
    setCurrentItemData,
    removeItem,
} = constructorSlice.actions;
