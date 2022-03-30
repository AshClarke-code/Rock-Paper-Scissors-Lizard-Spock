import styled from "styled-components";


export const MatchUpContainer = styled.div`
    min-width: 50%;
    height: 50%;
    display: flex;
    justify-content: space-around;


    @media only screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 2rem 1fr;
        grid-template-rows: repeat(auto-fit, 30rem);
        
    }

    @media only screen and (max-width: 800px) {
        grid-template-rows: repeat(auto-fit, 22rem);
        
    }

    

`;
