import styled, {css, keyframes} from "styled-components";

const grow = keyframes`
from {
    transform: scale(1);
    opacity: 1;
    background-color: white;
}
to {
    transform:scale(5);
    opacity: 0;
    background-color: white;
}
`;

const activeStyles = css`

 animation: ${grow} .5s ease-in-out;
`;


const getActiveStyles = props => props.isActive ? activeStyles : "";


export const SelectionContainer = styled.div`
    width: 25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 800px) {
        margin: 0 1.5rem;
        
    }

    @media only screen and (max-width: 600px) {
        width: 18rem;
        height: 90%;
    }

    @media only screen and (max-width: 500px) {
        width: 15rem;
    }

    @media only screen and (max-width: 400px) {
        margin: 0 .2rem;
    }
`;

export const ContainerHeading = styled.h2`
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: .3rem;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);

    @media only screen and (max-width: 600px) {
        font-size: 1.8rem;
        letter-spacing: .2rem;
    }

    @media only screen and (max-width: 500px) {
        font-size: 1.8rem;
        letter-spacing: 0;
    }
`;

export const TokenContainer = styled.div`
    background-color: hsl(237, 49%, 15%);
    height: 20rem;
    width: 20rem;
    border-radius: 100px;
    z-index: 1;

    @media only screen and (max-width: 600px) {
        width: 18rem;
        height: 18rem;
    }

    @media only screen and (max-width: 500px) {
        width: 15rem;
        height: 15rem;
    }

    @media only screen and (max-width: 400px) {
        width: 12rem;
        height: 12rem;
    }



    &::after {
        content: "";
        display: inline-block;
        height: 20rem;
        width: 20rem;
        border-radius: 10rem;
        position: absolute;
        z-index: 0;
        ${getActiveStyles};

        @media only screen and (max-width: 600px) {
            width: 18rem;
            height: 18rem;
        }

        @media only screen and (max-width: 500px) {
            width: 15rem;
            height: 15rem;
        }

        @media only screen and (max-width: 400px) {
            width: 12rem;
            height: 12rem;
        }

      }
  
`;