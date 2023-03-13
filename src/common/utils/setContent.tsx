import { ReactElement } from 'react';

import { NumbersContainer, MathOperators, EqualButton, Display } from '../components';

export const setContent = (name: string): ReactElement | undefined => {
    switch (name) {
        case 'display':
            return <Display />;
        case 'operators':
            return <MathOperators />;
        case 'numbers':
            return <NumbersContainer />;
        case 'equal':
            return <EqualButton />;
        default:
            break;
    }
};
