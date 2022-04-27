import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 5rem 0 5rem 0;
    width: 100%;
`;

export const LinkContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    column-gap: 1rem;

    margin: 0;
    padding: 0;

    font-size: 2rem;
    color: #DBE8D4;

    & li svg {
        border-radius: 50%;
    }

    & li svg:hover {
        cursor: pointer;
        color: rgb(115,204,168);
    }
`;

export const Copyright = styled.p`
`;

export const ScrollToTop = styled.button`
    font-size: 3rem;
    background-color: transparent;
    color: #DBE8D4;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;

    outline: none;
    border: none;

    & svg {
        position: relative;
        top: 0em; 
        right: .15em; 
    }

    & svg:hover {
        cursor: pointer;
        color: rgb(115,204,168);
    }
`;