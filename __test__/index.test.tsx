import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { Hero } from '../ui/components/3-organisms/Hero/Hero';

describe('Home', () => {
    it('renders a hero component', () => {
        render(<Hero heroImage={"https://jc-portofolio-93953.web.app/static/media/header_blaa_2000x1000.18040b32.jpg"} 
        heroTitle={"JACOB CHRISTENSEN "} 
        heroSubtitle={"Digital Product Developer | Frontend Developer | UX & Web | Entrepreneur | Tech"} 
        onClick={'/projects'}/>)

        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})


