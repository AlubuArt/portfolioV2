import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { CardListLayout } from '../ui/components/4-Layouts/ListLayout/CardListLayout';

describe('Home', () => {
    it('renders a page header component', () => {
        render(<PageHeader title={"title"} subtitle={'subtitle'} /> )

        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByText('subtitle')).toBeInTheDocument()
    })

   
})


