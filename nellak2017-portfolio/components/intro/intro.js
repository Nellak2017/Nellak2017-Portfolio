import {
    IntroContainer,
    IntroHeading,
    IntroSubHeading,
    IntroImage,
    IntroParagraph
} from './intro.elements.js'
import Logo from '../../public/Nellak2017-Logo.jpg'
import { useRouter } from 'next/router'

// Note: Since there is only 1 Intro element for the site, you may make it hard coded to save time
// Note: #Main Heading is used in the Scroll to section feature
const Intro = () => {
    const router = useRouter()
    return (
        <>
            <IntroContainer>
                <IntroHeading id="#Main Heading">Connor Keenum</IntroHeading>
                <IntroSubHeading>My Experiences as a Web Developer</IntroSubHeading>
                <IntroImage
                    src={Logo}
                    width={144}
                    height={144}
                    alt="Connor Keenum Logo"
                    placeholder="blur"
                    onClick={() => router.push("https://github.com/Nellak2017")}
                />
                <IntroParagraph>
                    For the past 2 years, I have devoted my time to the disciplined study of Web Development.
                    I have not ever worked professionally, but I have systematically been eating away at the Subject.
                </IntroParagraph>
                <IntroParagraph>
                    There is an ocean of information on how to make websites that are user friendly and performant.
                    Despite this, I have the patience to design scalable and flexible web applications.
                </IntroParagraph>
            </IntroContainer>
        </>
    );
}

export default Intro;