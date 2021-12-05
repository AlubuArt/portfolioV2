
import { Button } from './Button';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders a primary button", () =>  {
    render(<Button style="primary" onClick={() => {}}>{"content"}</Button> );
    expect(screen.getByRole('button')).toHaveClass("Button___primary")
    expect(screen.getByRole('button')).toHaveTextContent('content')
});
