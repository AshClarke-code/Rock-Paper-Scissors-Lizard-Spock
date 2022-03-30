import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
from {
    transform: scale(.5);
    opacity: 0;
}
to {
    transform:  scale(1);
    opacity: 1;
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

    @media only screen and (max-width: 800px) {
        grid-row: 2/3;
        grid-column: 2/3;
        margin-left: -15vw;
    }

    @media only screen and (max-width: 600px) {
        grid-row: 2/3;
        grid-column: 2/3;
        margin-left: -21vw;
    }

    @media only screen and (max-width: 400px) {
        margin-left: -35vw;
    }
`;

export const FeedbackMessage = styled.h1`
    color: white;
    font-size: 5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);
`;