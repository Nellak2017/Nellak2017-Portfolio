import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/nav/nav'
import Intro from '../components/intro/intro'
import Showcase from '../components/showcase/showcase'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <>
      <Head>

      </Head>
      <main>
        <Nav />
        <Intro></Intro>
        <Showcase></Showcase>
        <Footer></Footer>
      </main>
    </>
  )
}
