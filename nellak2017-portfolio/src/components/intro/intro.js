import {
    IntroContainer,
    IntroHeading,
    IntroSubHeading,
    IntroImage,
    IntroParagraph
} from './intro.elements.js'
import Link from 'next/link'

// Note: #Main Heading is used in the Scroll to section feature
const Intro = ({ intro }) => {
    const { heading, subHeading, introImage, introParagraphs } = intro || {}
    const { src, width, height, alt, placeholder, onClickRoute } = introImage || {}
    return (
        <IntroContainer>
            <IntroHeading id='#Main Heading'>{heading}</IntroHeading>
            <IntroSubHeading>{subHeading}</IntroSubHeading>
            <Link href={onClickRoute || '/'} passHref>
                <IntroImage
                    src={src || ""}
                    width={width || 144}
                    height={height || 144}
                    alt={alt || "No alt defined"}
                    placeholder={placeholder}
                />
            </Link>
            {introParagraphs?.map(el => (
                <IntroParagraph key={`Introduction-Section-Paragraph-${String(el.slice(10))}`}>
                    {String(el)}
                </IntroParagraph>
            ))}
        </IntroContainer>
    )
}

export default Intro