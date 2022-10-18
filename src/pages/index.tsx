import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/Header'
import { InfoSection } from '../components/Infos'
import { Main } from '../components/Main'
import { WhatWeDo } from '../components/WhatWeDo/index'

const Home: NextPage = () => {
  return (
    <>
      <div className='lg:px-20 px-3 min-h-[100vh] flex flex-col items-center' >
        <Header />
        <Main />
        <WhatWeDo /> 
        <InfoSection />
      </div>
      <Footer />
    </>
  )
}

export default Home
