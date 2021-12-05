import { Card } from './Card';
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a small card with frosted effect', () => {
    render(<Card style="frosted" size="small" onClick={() => {}}>{}</Card>);
    expect(screen.getByRole('card')).toHaveClass("Card___frosted")
    expect(screen.getByRole('card')).toHaveClass("Card___small")
    
})

it('renders a large card with frosted effect', () => {
    render(<Card style="frosted" size="large" onClick={() => {}}>{}</Card>)
    expect(screen.getByRole('card')).toHaveClass("Card___frosted")
    expect(screen.getByRole('card')).toHaveClass("Card___large")
})