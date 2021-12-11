import { ProjectDescription } from './ProjectDescription'
import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders a h1, h2 and a CTA primary, with text "test"', () => {
    render(<ProjectDescription list={['react', 'html', 'css']} title={"test"} description={"test paragraph"}></ProjectDescription>)
    expect(screen.getByRole('ProjectDescription')).toHaveClass("ProjectDescription_container")
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent("test")
    expect(screen.getByText('test paragraph'))
    let list = screen.getAllByRole('listitem')
    expect(list.length > 0)
})

