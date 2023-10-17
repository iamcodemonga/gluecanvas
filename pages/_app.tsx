import Head from 'next/head'
import Script from 'next/script'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import Wallet from '@/components/modals/Wallet'

export default function App({ Component, pageProps }: AppProps) {
  return <>
                <Head>
                  <title>Gluecanvas - The biggest NFT marketplace for creators</title>
                  <meta name="author" content="codemonga" />
                  <meta name="description" content="Create, buy and sell Arts, Photos, and Book NFT's at a very low gas price with Gluecanvas" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/icon.svg" />
                </Head>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
                <Wallet />
                <Component {...pageProps} />
                <NextNProgress color="#6164ff" startPosition={0.7} stopDelayMs={200} height={3} showOnShallow={true} />
            </>
}
