
import type { AppProps } from 'next/app';
import { PageLayout } from "../ui/components/4-Layouts/PageLayout/PageLayout";
import '../styles/global.css';
import { Header } from '../ui/components/2-molecules/Header';

function MyApp({ Component, pageProps }: AppProps) {

  let menuItems = [{ text: 'projects', path: '/projects' }, { text: 'about', path: '/about' }, { text: 'experiences', path: '/experience' }, { text: 'education', path: '/education' }, { text: 'contact', path: '/contact' }]
  return (
   <>
      <Header menuItems={ menuItems} />
      <Component {...pageProps} />
   </>
   
  )
  
}
export default MyApp

