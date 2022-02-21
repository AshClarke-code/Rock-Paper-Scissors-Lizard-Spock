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




export const MatchUpContainer = styled.div`
    min-width: 50%;
    height: 50%;
    display: flex;

`;

export const SelectionContainer = styled.div`
    width: 50%;
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
    letter-spacing: .5rem;
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