import { RootState } from '../store';

import { ItemType } from './constructorSlice';

export const getCalculatorBlocksSideBar = (state: RootState): ItemType[] =>
    state.constructorReducer.calculatorBlocks[0].items;

export const getCalculatorBlocksCanvas = (state: RootState): ItemType[] =>
    state.constructorReducer.calculatorBlocks[1].items;
