import {
    ShowcaseContainer,
    Title,
    Subtitle,
    LinkContainer,
    ShowcaseLinkContainer,
    ShowcaseLink,
    LinkText
} from './showcase.elements.js'

import Logo from '../../public/Nellak2017-Logo.jpg' // used as a dummy picture for dev

/* 
links = [
    {
        href: "http://example.com",
        img: "http://example.com/img",
        text: "lorem ipsum"
    }, ...
]
*/

// @ todo: Remove Dummy data and other extra stuff like border

const Showcase = ({ title, subtitle, links }) => {
    return (
        <>
            <ShowcaseContainer>
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
                <LinkContainer>
                    {links.map((link, index) => {
                        return (
                            <ShowcaseLinkContainer>
                                <ShowcaseLink 
                                key={`${title}_${index}`} 
                                href={link.href} 
                                alt={title}
                                style={{
                                    backgroundImage: `url(${Logo.src})`,
                                    backgroundSize: "cover",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(34,39,51,0.5)"
                                }}
                                >
                                    <LinkText>
                                        {link.text}
                                    </LinkText>
                                </ShowcaseLink>
                            </ShowcaseLinkContainer>
                        );
                    })}
                </LinkContainer>
            </ShowcaseContainer>
        </>
    );
}

export default Showcase;