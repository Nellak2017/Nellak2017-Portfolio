import Nav from '../components/nav/nav'
import Intro from '../components/intro/intro'
import Showcase from '../components/showcase/showcase'
import Footer from '../components/footer/footer'

import { navLinks, intro, projects, experience, paragraphs, footer } from '../data/Index/Data.js'

// @ TODO: Add Real Content for the Tech Experience (Defer Main Projects until done with those)
// @ TODO: Highlight the Nav elements based on the Route parameters and location on page
// @ TODO: Convert the imperative document.querySelector code to a useRefs solution. https://underbelly.is/writing-about/using-react-refs-to-manipulate-the-dom
// @ TODO: Make Resume page

// @ TODO: Host on Vercel (Defer doing this until done with Main Projects)
export default function Home() {
  return (
    <main>
      <Nav 
        links={navLinks}
      />
      <Intro 
        intro={intro}
      />
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
        paragraph={paragraphs}
      />
      <Footer 
        footer={footer}
      />
    </main>
  )
}