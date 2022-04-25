import {
    Navbar,
    NavbarContainer,
    NavLink
} from './nav.elements.js'

const Nav = () => {
    return (
        <>
            <Navbar>
                <NavbarContainer>
                    <ul>
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/#Games">Tech Experience</NavLink>
                        </li>
                        <li>
                            <NavLink href="/#Main Projects">Main Projects</NavLink>
                        </li>
                        <li>
                            <NavLink href="/#About">About</NavLink>
                        </li>
                        <li>
                            <NavLink href="/#Resume">Resume</NavLink>
                        </li>
                    </ul>
                </NavbarContainer>
            </Navbar>
        </>
    );
}

export default Nav;