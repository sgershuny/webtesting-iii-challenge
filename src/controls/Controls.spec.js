import React from 'react';
import '@testing-library/jest-dom';
import { render,fireEvent } from '@testing-library/react';

import Controls from './Controls';
// Test away!

describe('<Controls /> testing', () => {
    it('Are onclick functions fired', () => {
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();

        const { getByText } = render(<Controls 
                toggleLocked = { toggleLocked }
                toggleClosed = { toggleClosed }
                locked = {false}
                closed = {false}/>)

        fireEvent.click(getByText(/close gate/i))

        expect(toggleClosed).toHaveBeenCalled();
    })
})