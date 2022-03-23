import styled from "styled-components";
import {variables} from "./../../utils/variables";


export const ScoreContainer = styled.div`
    height: 95%;
    width: 25%;
    background-color: white;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: .9;

    @media only screen and (max-width: 400px) {
        font-size: 1.4rem;
    }

`;

export const Heading = styled.h3`
    color: ${variables.colorScoreText};
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: .2rem;

    @media only screen and (max-width: 400px) {
        font-size: 1.4rem;
    }
`;

export const Number = styled.h1`
    color: ${variables.colorDarkText};
    font-size: 7rem;

    @media only screen and (max-width: 400px) {
        font-size: 4rem;
    }
`;