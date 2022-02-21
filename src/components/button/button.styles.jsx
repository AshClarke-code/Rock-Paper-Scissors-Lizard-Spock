import styled, {css} from "styled-components";
import {variables} from "./../../utils/variables";

const defaultStyles = css`
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    padding: .8rem 2.5rem;

    &:hover,
    &:active {
        border: 2px solid white;
        color: white;
        
    }
`;

const invertedStyles = css`
    width: 75%;
    padding: 1.2rem 2.5rem;
    border: none;
    background-color: white;
    color: hsl(214, 47%, 23%);
    font-weight: 600;
    box-shadow: 5px 5px 13px 0px rgba(0,0,0,0.75);


`;

const getButtonStyles = props => props.isInverted ? invertedStyles : defaultStyles;


export const RulesButton = styled.button`
    text-align: center;
    text-transform: uppercase;
    border: 2px solid ${variables.colorHeaderOutline};
    color: ${variables.colorHeaderOutline};
    background-color: transparent;
    border-radius: 10px;
    letter-spacing: .1rem;
    cursor: pointer;
    ${getButtonStyles};
    
`;