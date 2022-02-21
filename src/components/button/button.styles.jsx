import styled from "styled-components";
import {variables} from "./../../utils/variables";


export const RulesButton = styled.button`
    text-align: center;
    text-transform: uppercase;
    border: 2px solid ${variables.colorHeaderOutline};
    color: ${variables.colorHeaderOutline};
    background-color: transparent;
    padding: .8rem 2.5rem;
    border-radius: 10px;
    align-self: flex-end;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    

    &:hover,
    &:active {
        border: 2px solid white;
        color: white;
        cursor: pointer;
    }
`;