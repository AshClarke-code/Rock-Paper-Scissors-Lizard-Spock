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

const fadeIn = keyframes`
from {
    transform: scale(.5);
    opacity: 0;
}
to {
    transform:scale(1);
    opacity: 1;
}
`;

const activeStyles = css`

 animation: ${grow} .5s ease-in-out;
`;


const getActiveStyles = props => props.isActive ? activeStyles : "";




export const MatchUpContainer = styled.div`
    min-width: 50%;
    height: 50%;
    display: flex;
    justify-content: space-around;

`;

export const SelectionContainer = styled.div`
    width: 25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerHeading = styled.h2`
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: .3rem;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);
`;

export const TokenContainer = styled.div`
    background-color: hsl(237, 49%, 15%);
    height: 20rem;
    width: 20rem;
    border-radius: 100px;
    z-index: 1;



    &::after {
        content: "";
        display: inline-block;
        height: 20rem;
        width: 20rem;
        border-radius: 10rem;
        position: absolute;
        z-index: 0;
        ${getActiveStyles};

      }
  
`;


export const FeedbackContainer = styled.div`
    width: 25rem;
    height: 100%;
    display: ${props => props.winner ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} .5s ease-in-out;
`;

export const FeedbackMessage = styled.h1`
    color: white;
    font-size: 5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);
`;