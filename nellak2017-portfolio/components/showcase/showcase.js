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

// I am selecting the Section by id to scroll to it. There may be better ways but I don't know them
const Showcase = ({ title, subtitle, links }) => {
    return (
        <>
            <ShowcaseContainer id={`#${title}`}>
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
                <LinkContainer>
                    {links.map((link, index) => {
                        return (
                            <ShowcaseLinkContainer key={`${title}_${index}`}>
                                <ShowcaseLink 
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