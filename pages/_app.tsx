import type { AppProps } from "next/app";
import  {useEffect} from 'react'
import { PageLayout } from "../ui/components/4-Layouts/PageLayout/PageLayout";
import TagManager from 'react-gtm-module';
import "../styles/global.css";
import Footer from "../ui/components/3-organisms/Footer/Footer";



function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    
    TagManager.initialize({gtmId: 'GTM-TG5VCVT'})
  }, [])
  
  return (
    <>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
    <Footer />
    </>
  
  );
}

export default MyApp;
