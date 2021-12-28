import { GetStaticProps } from 'next';
import type { AppProps } from 'next/app';
import { getHeroContent } from '../lib/graphcms';
import { PageLayout } from "../ui/components/4-layouts/PageLayout/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
  
}
export default MyApp

