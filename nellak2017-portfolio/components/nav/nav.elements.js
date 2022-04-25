import styled from 'styled-components'
import Link from 'next/link';

export const Navbar = styled.nav`
    background: rgb(82,94,101);
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 998;

    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);

    & ul{
        display: flex;
        column-gap: 0.25rem;
        height: 100%;
        text-decoration: none;
        list-style-type: none;
    }
    & li{
        height: 100%;
        padding: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-bottom: 4px solid transparent;
    }

    & li:hover{
        cursor: pointer;
        border-bottom: 4px solid rgb(115,204,168);
        color: rgb(115,204,168);
    }
`;

export const NavbarContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.25rem;
    height: 100%;

    z-index: 999;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const NavLink = styled(Link)`
`;