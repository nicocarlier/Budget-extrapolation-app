import { UserProvider } from "@auth0/nextjs-auth0/client";
import { figtree, red_hat_display } from "@/styles/fonts";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

const excludedPaths = ["/error", "/auth", "/internal", "/api", "/404"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const shouldExcludeLayout = excludedPaths.some((path) =>
    router.pathname.startsWith(path),
  );

  return (
    <NextUIProvider>
      <UserProvider>
        <Head>
          <title>Budget Extrapolator</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Extrapolate your future net worth"
          />
        </Head>
        {shouldExcludeLayout ? (
          <main className={`${red_hat_display.variable} ${figtree.variable}`}>
            <Component {...pageProps} />
          </main>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </UserProvider>
    </NextUIProvider>
  );
}
