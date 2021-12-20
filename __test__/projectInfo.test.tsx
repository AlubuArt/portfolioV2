import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { ProjectDescription } from '../ui/components/3-organisms/ProjectDescription';

describe('ProjectInfo', () => {
    it('renders a page header component, with a h1, paragraph and button(s)', () => {
        render(<PageHeader title={"title"} subtitle={'subtitle'} type={'ProjectHeader'}/> )
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByText('subtitle')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toEqual(2)
        
    })

    it('renders a description with h2 and paragraph', () => {
        render(<ProjectDescription title={'about'} description={'description'} list={[]} />);
        expect(screen.getByRole('heading')).toHaveTextContent('about')
        expect(screen.getByText('description')).toBeInTheDocument()
        expect(screen.getByRole('list')).toBeInTheDocument()
    })


    //TODO: find bug in Gallery import, and write a test for the gallery being rendered
    // look in repo: https://github.com/nolimits4web/swiper/issues/4871
})


