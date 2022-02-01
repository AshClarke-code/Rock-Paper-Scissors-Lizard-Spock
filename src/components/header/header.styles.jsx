import styled from "styled-components";
import {variables} from "./../../utils/variables";


export const HeaderContainer = styled.div`
    border-radius: 15px;
    border: 3px solid ${variables.colorHeaderOutline};
    height: 30%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2.5rem;
`;

export const Title = styled.h2`
    color: white;
    font-size: 3rem;
    width: 10%;
    text-transform: uppercase;
    line-height: .8;
    font-weight: 700;
`;