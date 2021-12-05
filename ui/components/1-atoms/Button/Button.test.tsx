
import { Button } from './Button';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders a primary button", () =>  {
    render(<Button onClick={() => {}} >{}</Button> );
    expect(screen.getByRole('button'))
});
