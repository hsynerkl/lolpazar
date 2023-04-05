import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "components/layouts";
import { LoginContextProvider } from "context/Login";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </LoginContextProvider>
  );
}
