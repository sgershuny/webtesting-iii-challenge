import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

// Test away!

describe('Display', () => {
    it('Everything default to open', () => {
        const { getByText } = render(<Display />)
        
        expect(getByText(/unlocked/i)).toBeTruthy();
        expect(getByText(/open/i)).toBeTruthy();
    })
})