import styled from "styled-components";
import {variables} from "./../../utils/variables";


export const HeaderContainer = styled.div`
    border-radius: 10px;
    border: 3px solid ${variables.colorHeaderOutline};
    height: 25%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2.5rem;
    margin-bottom: 8rem;

    @media only screen and (max-width: 1000px) {
        width: 60%;
    }

    @media only screen and (max-width: 800px) {
        width: 80%;
    }

    @media only screen and (max-width: 600px) {
        width: 95%;
        height: 20%;
    }

    @media only screen and (max-width: 400px) {
        width: 98%;
        height: 15%;
    }

    @media only screen and (max-width: 400px) {
        padding: .5rem 1rem;
    }
`;

export const Title = styled.h2`
    color: white;
    font-size: 2.5rem;
    width: 10%;
    text-transform: uppercase;
    line-height: .8;
    font-weight: 700;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);

    @media only screen and (max-width: 600px) {
        font-size: 2.2rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.4rem;
    }
`;