import {
    ShowcaseContainer,
    Title,
    Subtitle,
    LinkContainer,
    ShowcaseLinkContainer,
    ShowcaseLink,
    LinkText,
    ShowcaseParagraph
} from './showcase.elements.js'

// I am selecting the Section by id to scroll to it. There may be better ways but I don't know them
const Showcase = ({ title, subtitle, links, paragraph }) => {
    return (
        <ShowcaseContainer id={`#${title}`}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <LinkContainer>
                {links?.map((link, index) => {
                    return (
                        <ShowcaseLinkContainer key={`${title}_${index}`}>
                            <ShowcaseLink
                                href={link.href}
                                alt={link.alt}
                                style={{
                                    backgroundImage: `url(${link.logo.src})`,
                                    backgroundSize: "65%",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(34,39,51,0.5)"
                                }}
                            >
                            </ShowcaseLink>
                            <LinkText>
                                <b>{link.text}</b>
                                <p>{link.text2}</p>
                            </LinkText>
                        </ShowcaseLinkContainer>
                    )
                })}
            </LinkContainer>
            <ShowcaseParagraph>{paragraph?.map(p => p)}</ShowcaseParagraph>
        </ShowcaseContainer>
    )
}

export default Showcase