import styled from 'styled-components';
import Link from 'next/link';

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 0;

    height: 48px;
    width: 100%;
    min-width: 20rem;

    position: fixed;
    overflow: hidden;
    top: 0;

    background: rgb(82,94,101);

    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);

    z-index: 998;
`;

export const NavbarContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    height: 100%;
    width: 100%;
    max-width: 1300px;

    z-index: 999;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }

    & a{
        font-size: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-bottom: 4px solid transparent;
    }

    & a:hover{
        cursor: pointer;
        border-bottom: 4px solid rgb(115,204,168);
        color: rgb(115,204,168);
    }

    & span{
        height: 100%;
    }
`;

export const NavLink = styled(Link)`
`;