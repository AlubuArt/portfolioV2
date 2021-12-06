import { Heading } from './Heading';
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a heading of type h1', () => {
    render(<Heading type="h1" tag="h1">{}</Heading>);
    expect(screen.getByRole('heading')).toHaveClass("Heading___h1")
})