import React from 'react';
import{ render,fireEvent,cleanup } from '@testing-library/react';
import Dashboard from './Dashboard';
// Test away

describe('<Dashboard />', () => {

    it('Gate Closes', ()=> {
        const { getByText,queryByText } = render( <Dashboard /> )

        const button = getByText( /close gate/i )

        fireEvent.click(button)

        expect(queryByText(/closed/i)).toBeTruthy();
    })

    it('Lock Closed Gate', () => {
        const { getByText,queryByText } = render( <Dashboard /> )



        fireEvent.click(getByText( /close gate/i ))
        fireEvent.click(getByText( /lock gate/i ))
        
        expect(queryByText(/unlocked/i)).not.toBeTruthy();
        expect(queryByText(/locked/i)).toBeTruthy();
        
        fireEvent.click(getByText( /unlock gate/i ))
        expect(queryByText(/unlocked/i)).toBeTruthy();
    })
})