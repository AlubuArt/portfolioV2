import { ProjectHeader } from './ProjectHeader';
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a h1, h2 and a CTA primary, with text "test"', () => {
    render(<ProjectHeader title={"test"} description={"test paragraph"} onClick={() => {}}></ProjectHeader>)
    expect(screen.getByRole('ProjectHeader')).toHaveClass("Project_container")
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent("test")
    expect(screen.getByText('test paragraph'))
    expect(screen.getByText('VISIT WEBSITE'))
    expect(screen.getByText('SEE ON GITHUB'))
    
})

