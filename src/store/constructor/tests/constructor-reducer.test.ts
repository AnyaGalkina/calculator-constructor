import {
    addItem,
    constructorReducer,
    InitialStateType,
    removeItem,
    setCurrentItemData,
    setDragOver,
    setUpperItemPosition,
} from '../constructorSlice';

let state: InitialStateType;

beforeEach(() => {
    state = {
        calculatorBlocks: [
            {
                id: 1,
                title: 'sideBar',
                items: [
                    { id: 1, name: 'display', isDragged: false, isDraggedOver: false },
                    {
                        id: 2,
                        name: 'operators',
                        isDragged: false,
                        isDraggedOver: false,
                    },
                    { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                    { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
                ],
            },
            {
                id: 1,
                title: 'panel',
                items: [
                    { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
                    {
                        id: 2,
                        name: 'operators',
                        isDragged: false,
                        isDraggedOver: false,
                    },
                    { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                ],
            },
        ],
        currentItemId: 0,
        currentItemPosition: 0,
        currentItemZone: '',
        upperItemPosition: 0,
    };
});

test('current item data should be set', () => {
    const newState = constructorReducer(
        state,
        setCurrentItemData({ id: 4, index: 1, zone: 'canvas' }),
    );

    expect(newState.currentItemZone).toBe('canvas');
    expect(newState.currentItemPosition).toBe(1);
    expect(newState.currentItemId).toBe(4);  // eslint-disable-line
});

test('current upper item position should be set', () => {
    const newState = constructorReducer(state, setUpperItemPosition(1));

    expect(newState.upperItemPosition).toBe(1);
});

test('current upper item id should be set', () => {
    const newState = constructorReducer(
        state,
        setDragOver({ index: 2, isDraggedOver: true }),
    );

    expect(newState.calculatorBlocks[1].items[2].isDraggedOver).toBeTruthy(); // eslint-disable-line
});

test('item should be removed from the canvas array', () => {
    const newState = constructorReducer(state, removeItem({ id: 2, index: 1 }));

    expect(newState.calculatorBlocks[0].items[2].isDragged).toBeFalsy(); // eslint-disable-line
    expect(newState.calculatorBlocks[1].items.length).toBe(2); // eslint-disable-line
});

test('item with name "display" should be unshift to the canvas array', () => {
    state = {
        calculatorBlocks: [
            {
                id: 1,
                title: 'panel',
                items: [
                    { id: 1, name: 'display', isDragged: false, isDraggedOver: false },
                    {
                        id: 2,
                        name: 'operators',
                        isDragged: false,
                        isDraggedOver: false,
                    },
                    { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                    { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
                ],
            },
            {
                id: 1,
                title: 'panel',
                items: [
                    { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
                    {
                        id: 2,
                        name: 'operators',
                        isDragged: false,
                        isDraggedOver: false,
                    },
                    { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                ],
            },
        ],
        currentItemId: 1,
        currentItemPosition: 0,
        currentItemZone: 'sideBar',
        upperItemPosition: 2,
    };
    const newState = constructorReducer(state, addItem());

    expect(newState.calculatorBlocks[1].items[0].name).toBe('display');
});

test('item should change order in canvas array', () => {
    state = {
        calculatorBlocks: [
            {
                id: 1,
                title: 'sideBar',
                items: [
                    { id: 1, name: 'display', isDragged: false, isDraggedOver: false },
                    {
                        id: 2,
                        name: 'operators',
                        isDragged: false,
                        isDraggedOver: false,
                    },
                    { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                    { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
                ],
            },
            {
                id: 1,
                title: 'panel',
                items: [
                    { id: 4, name: 'equal', isDragged: false, isDraggedOver: false },
                    {
                        id: 2,
                        name: 'operators',
                        isDragged: false,
                        isDraggedOver: false,
                    },
                    { id: 3, name: 'numbers', isDragged: false, isDraggedOver: false },
                ],
            },
        ],
        currentItemId: 3,
        currentItemPosition: 2,
        currentItemZone: 'canvas',
        upperItemPosition: 0,
    };

    const newState = constructorReducer(state, addItem());

    expect(newState.calculatorBlocks[1].items[1].name).toBe('numbers');
    expect(newState.calculatorBlocks[1].items.length).toBe(3);  // eslint-disable-line
});
