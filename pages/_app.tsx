import type { AppProps } from "next/app";
import  {useEffect} from 'react'
import { PageLayout } from "../ui/components/4-Layouts/PageLayout/PageLayout";
import TagManager from 'react-gtm-module';
import "../styles/global.css";
import { getAllPages } from "../lib/graphcms";



function MyApp({ Component, pageProps }: AppProps) {
  

  useEffect(() => {
    
    TagManager.initialize({gtmId: 'GTM-TG5VCVT'})
  }, [])

  console.log(pageProps.pages)
  
  return (
    <>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
    </>
  
  );
}


export default MyApp;
