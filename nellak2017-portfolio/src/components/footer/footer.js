import {
    FooterContainer,
    LinkContainer,
    Copyright,
    ScrollToTop
} from './footer.elements'
import { MdOutlineError } from "react-icons/md"
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import Link from 'next/link'

// The Links are not next/links because their content is not a string
const Footer = ({ footer }) => {
    const { socialLinks, fullName } = footer || {}
    return (
        <FooterContainer>
            <LinkContainer>
                {socialLinks?.map(el => (
                    <li key={el?.href}><Link href={el?.href} passHref>{el?.icon || <MdOutlineError style={{background: 'black'}}/>}</Link></li>
                ))}
            </LinkContainer>
            <Copyright>{`© ${new Date().getFullYear()} ${fullName}`}</Copyright>
            <ScrollToTop><BsFillArrowUpCircleFill onClick={() => document.getElementById('#Main Heading').scrollIntoView({ behavior: 'smooth' })} /></ScrollToTop>
        </FooterContainer>
    )
}

export default Footer