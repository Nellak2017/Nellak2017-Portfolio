import styled from 'styled-components';


export const ShowcaseContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    scroll-margin: 55px; // Used when I use the ScrollIntoView OnClick handler in the Nav

    margin-top: 10rem;
`;

export const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 800;
    font-size: 2rem;

    margin: 0;
    padding: 0 0 2rem 0;

    border-bottom: solid 4px rgb(82,94,101);
`;

export const Subtitle = styled.h2`
    font-family: normal 100%/1.5 'Titillium Web', sans-serif;
    font-weight: 100;
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

export const LinkContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;

    width: 45rem;

    @media screen and (max-width: 726px){
        width: 100%;
        justify-content: center;
    }
`;

export const ShowcaseLinkContainer = styled.span`
    position: relative;
    border-radius: 50%;
`;

export const ShowcaseLink = styled.a`
    position: relative;
    display: flex;
    
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    background-color: #2E3445;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    color: #DBE8D4;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    &:before {
        content: "";
        background-color: rgba(34,39,51,0.5);
        border-radius: 50%;
        width: 100%;
        height: 100%;
        z-index: 0;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const LinkText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    

    font-family: normal 100%/1.5 'Titillium Web', sans-serif;
    font-size: 1rem;
    font-weight: 600;

    height: 160px;
    width: 160px;
    z-index: 900;

    
`;