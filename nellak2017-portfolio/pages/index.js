import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/nav/nav'
import Intro from '../components/intro/intro'
import Showcase from '../components/showcase/showcase'
import Footer from '../components/footer/footer'

import Logo from '../public/Nellak2017-Logo.jpg' 
import html from '../public/html5.svg'
import javascript from '../public/javascript.svg'
import css from '../public/css3.svg'
import python from '../public/python.svg'
import next from '../public/next-js.svg'
import java from '../public/java.svg'
import git from '../public/git.svg'
import go from '../public/go.svg'
import redux from '../public/redux.svg'
import postgres from '../public/PostgreSQL_logo.svg'
import ts from '../public/TS.svg'
import jest from '../public/jest.svg'
import dynamo from '../public/dynamodb.svg'

// @ todo: Add Real Content for the Tech Experience (Defer Main Projects until done with those)
// @ todo: Add Real Content for About me 
// @ todo: Change route to match /# when scrolled to that section
// @ todo: Highlight the Nav elements based on the Route parameters
// @ todo: Convert the imperative document.querySelector code to a useRefs solution. https://underbelly.is/writing-about/using-react-refs-to-manipulate-the-dom
// @ todo: Make Resume page

// @ todo: Host on Vercel (Defer doing this until done with Main Projects)
export default function Home() {
  const projects = [
    {
      href: "http://example.com",
      text: "lorem ipsum",
      text2: "",
      logo: Logo,
      alt: "logo"
    },
    {
      href: "http://example.com",
      text: "lorem ipsum",
      text2: "",
      logo: Logo,
      alt: "logo"
    },
    {
      href: "http://example.com",
      text: "lorem ipsum",
      text2: "",
      logo: Logo,
      alt: "logo"
    },
    {
      href: "http://example.com",
      text: "lorem ipsum",
      text2: "",
      logo: Logo,
      alt: "logo"
    },
    {
      href: "http://example.com",
      text: "lorem ipsum",
      text2: "",
      logo: Logo,
      alt: "logo"
    }
  ]
  const experience = [
    {
      href: "https://www.w3.org/html/",
      text: "HTML",
      text2: "Intermediate Developer Level",
      logo: html,
      alt: "html"
    },
    {
      href: "https://www.w3schools.com/css/",
      text: "CSS",
      text2: "Junior Developer Level",
      logo: css,
      alt: "css"
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      text: "JS",
      text2: "Junior Developer Level",
      logo: javascript,
      alt: "javascript"
    },
    {
      href: "https://www.python.org",
      text: "Python",
      text2: "Junior Developer Level",
      logo: python,
      alt: "python"
    },
    {
      href: "https://nextjs.org/",
      text: "Next",
      text2: "Advanced Beginner Level",
      logo: next,
      alt: "next"
    },
    {
      href: "https://www.java.com/en/",
      text: "Java",
      text2: "Advanced Beginner Level",
      logo: java,
      alt: "java"
    },
    {
      href: "https://git-scm.com/",
      text: "Github",
      text2: "Advanced Beginner Level",
      logo: git,
      alt: "git"
    },
    {
      href: "https://go.dev/",
      text: "Go",
      text2: "Advanced Beginner Level",
      logo: go,
      alt: "go"
    },
    {
      href: "https://redux.js.org/",
      text: "Redux",
      text2: "Advanced Beginner Level",
      logo: redux,
      alt: "redux"
    },
    {
      href: "https://www.postgresql.org/",
      text: "Postgres",
      text2: "Beginner Level",
      logo: postgres,
      alt: "postgres"
    },
    {
      href: "https://www.typescriptlang.org/",
      text: "TypeScript",
      text2: "Beginner Level",
      logo: ts,
      alt: "ts"
    },
    {
      href: "https://jestjs.io/",
      text: "Jest",
      text2: "Beginner Level",
      logo: jest,
      alt: "jest"
    },
    {
      href: "https://aws.amazon.com/dynamodb/",
      text: "DynamoDB",
      text2: "Beginner Level",
      logo: dynamo,
      alt: "dynamodb"
    }
  ]

  const paragraphs = [
    {
      p1: "What can I do?" 
    },
    {
      p1: "I can make a website from a rough idea to a fully functional product. I have experience with the\
      basic fundamentals of web development: HTML, CSS, and JavaScript. On top of this, I enhance this knowledge\
      with tools that simplify the development process."
    },
    {
      p1: "The main tool I use is Next.JS to quickly build performant and scalable websites.\
      Building custom websites is not easy, especially when you need to reliably do it well.\
      That is why I have fully immersed myself in the ocean of web development, and I am able to \
      keep my head above water, with a wide knowledge of many emerging technologies." 
    },
    {
      p1: "Who am I?"
    },
    {
      p1: "I am Connor Keenum, a Software Engineer. I have been interested in programming since I was a young teenager.\
      My first programming language was Java. Ever since I wrote my first hello world I have been\
      absolutely enthralled by programming. It simultaneously allows me to fulfill my deep need to\
      create things, while also delivering massive value to others." 
    },
    {
      p1: "A Software Engineer is always learning. They succeed and they fail. Yet they only see failures\
      as opportunities to grow."
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
          links={projects}
        />
        <Showcase
          title="Tech Experience"
          subtitle="These are the Technologies I am familiar with."
          links={experience}
        />
        <Showcase
          title="About"
          subtitle="Here, you can learn a little bit about me."
          paragraph = {paragraphs}
        />

        <Footer></Footer>
      </main>
    </>
  )
}
