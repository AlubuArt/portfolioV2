import { ProjectDescription } from './ProjectDescription'
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a h1, h2 and a CTA primary, with text "test"', () => {
    render(<ProjectDescription title={"test"} description={"test"} onClick={() => {}}></ProjectDescription>)
    expect(screen.getByRole('ProjectDescription')).toHaveClass("ProjectDescription_container")
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent("test")
    expect(screen.getByRole('heading',{level: 3})).toHaveTextContent("test")
})

