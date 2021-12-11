import { Card } from './Card';
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a small card with frosted effect', () => {
    render(<Card type="basic" size="sm" onClick={() => {}}>{}</Card>);
    expect(screen.getByRole('card')).toHaveClass("Card Card___basic Card___sm")
    
})

it('renders a large card with frosted effect', () => {
    render(<Card type="basic" size="lg" onClick={() => {}}>{}</Card>)
    expect(screen.getByRole('card')).toHaveClass("Card Card___basic Card___lg")
})