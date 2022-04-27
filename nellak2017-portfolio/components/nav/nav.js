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
                    <NavLink href="/">
                        <span>
                            <a onClick={() => document.getElementById('#Main Heading').scrollIntoView({ behavior: 'smooth' })}>
                                Home
                            </a>
                        </span>
                    </NavLink>
                    <NavLink href="/#Main Projects">
                        <span>
                            <a onClick={() => document.getElementById('#Main Projects').scrollIntoView({ behavior: 'smooth' })}>
                                Main Projects
                            </a>
                        </span>
                    </NavLink>
                    <NavLink href="/#Tech Experience" >
                        <span>
                            <a onClick={() => document.getElementById('#Tech Experience').scrollIntoView({ behavior: 'smooth' })}>
                                Tech Experience
                            </a>
                        </span>
                    </NavLink>
                    <NavLink href="/#About">
                        <span>
                            <a onClick={() => document.getElementById('#About').scrollIntoView({ behavior: 'smooth' })}>
                                About
                            </a>
                        </span>
                    </NavLink>
                    <NavLink href="/Resume" >Resume</NavLink>
                </NavbarContainer>
            </Navbar>
        </>
    );
}

export default Nav;