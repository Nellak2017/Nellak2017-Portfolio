import {
    FooterContainer,
    LinkContainer,
    Copyright,
    ScrollToTop
} from './footer.elements'
import {useRouter} from 'next/router'
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

// This is hard coded because It is merely 3 links to sites that don't change
// The Links are not next/links because their content is not a string
const Footer = () => {
    const router = useRouter()
    return (
        <>
            <FooterContainer>
                <LinkContainer>
                    <li>
                        <AiFillGithub onClick={() => router.push("https://github.com/Nellak2017")}/>
                    </li>
                    <li>
                        <FaFacebook onClick={() => router.push("https://www.facebook.com/connor.keenum")}/>
                    </li>
                    <li>
                        <BsLinkedin onClick={() => router.push("https://www.linkedin.com/in/connor-keenum/")}/> 
                    </li>
                </LinkContainer>
                <Copyright>
                    © 2022 Connor Keenum
                </Copyright>
                <ScrollToTop>
                    {/* React Icon with scroll to top functionality */}
                    <BsFillArrowUpCircleFill onClick={() => document.getElementById('#Main Heading').scrollIntoView({ behavior: 'smooth' })}/>
                </ScrollToTop>
            </FooterContainer>
        </>
    );
}

export default Footer;