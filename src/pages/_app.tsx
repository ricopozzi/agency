import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M9GFFJ0QS8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M9GFFJ0QS8');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
