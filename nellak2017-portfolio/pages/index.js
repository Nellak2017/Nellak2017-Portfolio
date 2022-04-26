import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/nav/nav'
import Intro from '../components/intro/intro'
import Showcase from '../components/showcase/showcase'
import Footer from '../components/footer/footer'

export default function Home() {
  const links = [
    {
      href: "http://example.com",
      img: "http://example.com/img",
      text: "lorem ipsum"
    },
    {
      href: "http://example.com",
      img: "http://example.com/img",
      text: "lorem ipsum"
    },
    {
      href: "http://example.com",
      img: "http://example.com/img",
      text: "lorem ipsum"
    },
    {
      href: "http://example.com",
      img: "http://example.com/img",
      text: "lorem ipsum"
    },
    {
      href: "http://example.com",
      img: "http://example.com/img",
      text: "lorem ipsum"
    }
  ]
  return (
    <>
      <Head>

      </Head>
      <main>
        <Nav />
        <Intro></Intro>
        <Showcase
          title="Main Projects"
          subtitle="The main projects that I am working on at the moment."
          links={links} 
          />
          <Showcase
          title="Tech Experience"
          subtitle="These are the Technologies I am familiar with."
          links={links} 
          />
          <Showcase
          title="About"
          subtitle="Here, you can learn a little bit about me."
          links={links} 
          />

        <Footer></Footer>
      </main>
    </>
  )
}
