import type { AppProps } from "next/app";
import { PageLayout } from "../ui/components/4-Layouts/PageLayout/PageLayout";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
export default MyApp;
