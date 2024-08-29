// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from "styled-components"
import { BASE_PATH } from '../data/constants.js'

const logoString = `${BASE_PATH}/Nellak2017-Logo.jpg`

class MyDocument extends Document {
    // Used to eliminate a FOUC, where FOUC is a Flash of Unstyled Content, caused by styled components
    // https://nimblecode.dev/blog/fixing-fouc-nextjs-styled-components/
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) })
            const initialProps = await Document.getInitialProps(ctx)
            return { ...initialProps, styles: [initialProps.styles, sheet.getStyleElement()] }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/*Icon*/}
                    <link rel="icon" href={logoString} width='20px' height='27px' />

                    {/*Fonts*/}
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Titillium+Web:wght@400;900&display=swap" rel="stylesheet"></link>

                    {/*Facebook meta tags*/}
                    <meta property="og:url" content="/" />
                    <meta property="og:image" content={logoString} />
                    <meta property="og:title" content="Connor Keenum's Portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:description" content="Explore Connor Keenum's professional portfolio showcasing software development projects, skills, and experience." />

                    {/*Twitter meta tags*/}
                    <meta property="twitter:image" content={logoString} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content="Connor Keenum's Portfolio" />
                    <meta property="twitter:description" content="Explore Connor Keenum's professional portfolio showcasing software development projects, skills, and experience."></meta>

                    {/*Html meta tags*/}
                    <meta httpEquiv="content-language" content="en" />
                    <meta charSet="UTF-8" />

                    {/*SEO meta tags*/}
                    <meta name="keywords" content="Connor Keenum, software developer, portfolio, projects, web development, programming, software engineering" />
                    <meta name="author" content="Connor Keenum" />
                    <meta name="description" content="Explore Connor Keenum's professional portfolio showcasing software development projects, skills, and experience." />
                    <meta name="page-topic" content="Portfolio" />
                    <meta name="page-type" content="Personal Portfolio" />
                    <meta name="audience" content="Developers, Recruiters, Employers, Everyone" />
                    <meta name="robots" content="index, follow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument