import {
    Navbar,
    NavbarContainer,
    NavLink
} from './nav.elements.js'

// Note: If you were using a headless CMS, you would define a get static props to get the data used
// Note: Since this is merely a simple Portfolio Page, you can hard code it yourself, and serve assets from cdn
const Nav = () => {
    return (
        <>
            <Navbar>
                <NavbarContainer>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/#Main Projects" forwardedAs="/#Main Projects">Main Projects</NavLink>
                    <NavLink href="/#Tech Experience" forwardedAs="/#Tech Experience">Tech Experience</NavLink>
                    <NavLink href="/#About" forwardedAs="/#About">About</NavLink>
                    <NavLink href="/#Resume" forwardedAs="/#Resume">Resume</NavLink>
                </NavbarContainer>
            </Navbar>
        </>
    );
}

export default Nav;