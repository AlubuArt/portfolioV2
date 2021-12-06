import { ProjectHeader } from './ProjectHeader';
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a h1, h2 and a CTA primary, with text "test"', () => {
    render(<ProjectHeader title={"test"} description={"test"} onClick={() => {}}></ProjectHeader>)
    expect(screen.getByRole('ProjectHeader')).toHaveClass("Project_container")
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent("test")
    expect(screen.getByRole('heading',{level: 3})).toHaveTextContent("test")
    expect(screen.getByRole('button')).toHaveTextContent('VISIT WEBSITE')
})

