import styled, {css} from "styled-components";
import {variables} from "./../../utils/variables";
import {tokenTypes} from "./../../utils/tokenTypes";

const scissorsStyles = css`
    background: ${variables.colorScissors};
    box-shadow: 2px .7rem 0 0 ${variables.colorScissorsShadow};
`;

const paperStyles = css`
    background: ${variables.colorPaper};
    box-shadow: 2px .7rem 0 0 ${variables.colorPaperShadow};
`;

const rockStyles = css`
    background: ${variables.colorRock};
    box-shadow: 2px .7rem 0 0 ${variables.colorRockShadow};
`;

const lizardStyles = css`
    background: ${variables.colorLizard};
    box-shadow: 2px .7rem 0 0 ${variables.colorLizardShadow};
`;

const spockStyles = css`
    background: ${variables.colorSpock};
    box-shadow: 2px .7rem 0 0 ${variables.colorSpockShadow};
`;

const smallTokenStyles = css`
    width: 12rem;
    height: 12rem;

    @media only screen and (max-width: 600px) {
        width: 10rem;
        height: 10rem;
    }

    @media only screen and (max-width: 400px) {
        width: 9rem;
        height: 9rem;
    }


`;

const bigTokenStyles = css`
    width: 21rem;
    height: 21rem;
    margin-left: -1rem;
    margin-top: -1rem;
    z-index: 5;
`;


const getColors = props => {
    switch(props.tokenType) {
        case tokenTypes.PAPER:
            return paperStyles;
        case tokenTypes.ROCK:
            return rockStyles;
        case tokenTypes.LIZARD:
            return lizardStyles;
        case tokenTypes.SPOCK:
            return spockStyles;

        default: return scissorsStyles;
    }
};


const getTokenSize = props => {
    return props.isBigToken ? bigTokenStyles : smallTokenStyles;
};


export const TokenContainer = styled.div`
    border-radius: 100%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${getTokenSize};
    ${getColors};
`;

export const IconContainer = styled.div`
    background-color: white;
    border-radius: inherit;
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 .7rem 3px 0 rgba(128,112,112,0.41) inset;
`;