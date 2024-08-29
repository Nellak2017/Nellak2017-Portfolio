import styled from 'styled-components';


export const ShowcaseContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    scroll-margin: 55px; // Used when I use the ScrollIntoView OnClick handler in the Nav
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
    max-width: 60rem;
    width: 100%;
    padding: 0 10%;
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
    display: flex;
    flex-direction: column;
    row-gap: 0;

    transition: all 100ms ease-out 20ms;
    position: relative;
    border-radius: 50%;
    width: 160px;
    height: 300px;
`;

export const ShowcaseLink = styled.a`
    position: relative;
    display: flex;

    aspect-ratio: 1 / 1; /* Width is equal to height */
    height: 160px;
    width: 160px;

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
    -webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
    &:before {
        content: "";
        border-radius: 50%;
        width: 100%;
        height: 100%;
        z-index: 0;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }
    &:hover {
        height: 176px;
        width: 176px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect on hover */
    }
`;

export const LinkText = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;

    padding-top: 10px;

    position: relative;
    overflow: hidden;

    font-family: normal 100%/1.5 'Titillium Web', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: white;

    width: 160px;
    height: 140px; // Note: This is so it adds to 300px with the <a> above

    z-index: 900;

    & b {
        width: 100%;
        height: 30px; // Note: this is arbitrarily chosen. 140px = 30px + 110px
        font-size: 1.25rem; 
        font-weight: bold;
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis; 
    }

    & p {
        margin: 0;
        height: 110px; // Note: this is arbitrarily chosen. 140px = 30px + 110px
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
`;

export const ShowcaseParagraph = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    row-gap: 1rem;
    width: 28rem;

    @media screen and (max-width: 476px) {
        width: 100%;
        padding: 0 10%;
    }

    font-size: 1.2rem;
    & * {
        margin: 0;
        padding: 0;
    }

`;