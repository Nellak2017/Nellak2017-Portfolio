import {
    Navbar,
    NavbarContainer,
    NavLink
} from './nav.elements.js'

// links = [{ href, heading, displayName }]
const Nav = ({ links = [] }) => {
    const handleClick = el => () => el?.heading ? document.getElementById(el.heading).scrollIntoView({ behavior: 'smooth' }) : undefined
    return (
        <Navbar>
            <NavbarContainer>
                {links?.map((el, i) =>
                    <NavLink
                        key={`NavLink-${i}-${el?.displayName || 'No display name'}`}
                        href={el?.href || '/'}
                        onClick={handleClick(el)}
                    >
                        {el?.displayName || 'No display name'}
                    </NavLink>
                )}
            </NavbarContainer>
        </Navbar>
    )
}

export default Nav