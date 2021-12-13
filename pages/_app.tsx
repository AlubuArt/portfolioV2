import type { AppProps } from 'next/app';
import "../styles/global.css";
import { PageLayout } from "../ui/components/4-Layouts/PageLayout/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
  
}

export default MyApp
