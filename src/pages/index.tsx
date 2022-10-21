import type { NextPage } from 'next'
import Script from "next/script"
import Head from 'next/head'
import { Footer } from '../components/footer'
import { Header } from '../components/Header'
import { InfoSection } from '../components/Infos'
import { Main } from '../components/Main'
import { Projects } from '../components/Projects'
import { WhatWeDo } from '../components/WhatWeDo/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queza | Especialistas em software</title>
      </Head>
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M9GFFJ0QS8');
          `
        }}  
        />
      <div id="home" className='lg:px-20 px-3 min-h-[100vh] flex flex-col items-center' >
        <Header />
        <Main />
        <WhatWeDo /> 
        <InfoSection />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default Home
