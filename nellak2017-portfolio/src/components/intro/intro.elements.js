import styled from 'styled-components';
import image from 'next/image';

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
   
    //margin-top: clamp(0px,-17.0270rem + 43.2432vh, 150px);

    width: 100%;
    padding: 0 1rem;

    a {
        height: 160px;
    }
`;

export const IntroHeading = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 100;
    
    position: relative;
    
    text-align: center;
    text-transform: uppercase;
    font-size: min(9vw,6rem);
    
    scroll-margin: 55px; // Used for the Scroll to section function in the nav and footer

    margin: .5rem 0 0 0;
`;

export const IntroSubHeading = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
`;

export const IntroImage = styled(image)`
    transition: all 150ms ease-out 20ms;
    border-radius: 50%;
    aspect-ratio: 1 / 1; /* Width is equal to height */
    height: 100%;
    width: auto;
    &:hover{
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect on hover */
        height: 110%;
    }
    
`;

export const IntroParagraph = styled.p`
    margin: 0 auto;
    margin-top: 2rem;

    width: 28rem;

    font-size: 1.2rem;
    text-align: justify;
    
    @media screen and (max-width: 476px){
        width: 100%;
    }
`;
