import styled from "styled-components";


export const SelectTokenContainer = styled.div`
    height: 50%;
    width: 30%;
    background-image: url(${props => props.imageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(4, 25%);
    margin-bottom: 5rem;

    @media only screen and (max-width: 1200px) {
        width: 40%;
    }

    @media only screen and (max-width: 1000px) {
        width: 50%;
    }

    @media only screen and (max-width: 700px) {
        width: 60%;
    }

    @media only screen and (max-width: 600px) {
        width: 50%;
        height: 45%;
    }

`;

export const ScissorsContainer = styled.div`
    grid-column: 3/4;
    margin-top: -55%;
    margin-left: -25%;

    @media only screen and (max-width: 600px) {
        margin-top: -35%;
        margin-left: -40%;
    }

    @media only screen and (max-width: 400px) {
        margin-top: 80%;
        margin-left: -90%;
    }
`;

export const SpockContainer = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
    margin-left: -20%;
    margin-top: -20%;

    @media only screen and (max-width: 1000px) {
        margin-left: -10%;
    }

    @media only screen and (max-width: 800px) {
        margin-left: -40%;
    }

    @media only screen and (max-width: 600px) {
        margin-left: -70%;
        margin-top: -15%;
    }

    @media only screen and (max-width: 400px) {
        margin-left: -150%;
        margin-top: 20%;
    }
`;

export const PaperContainer = styled.div`
    grid-column: 5/6;
    grid-row: 2/3;
    margin-left: -20%;
    margin-top: -20%;

    @media only screen and (max-width: 400px) {
        margin-left: -20%;
        margin-top: 20%;
    }
`;

export const LizardContainer = styled.div`
    grid-column: 2/3;
    grid-row: 4/5;
    margin-left: -30%;
    margin-top: 20%;

    @media only screen and (max-width: 800px) {
        margin-left: -50%;
    }

    @media only screen and (max-width: 600px) {
        margin-left: -70%;
        margin-top: 0;
    }

    @media only screen and (max-width: 400px) {
        margin-left: -150%;
        margin-top: -140%;
    }
`;

export const RockContainer = styled.div`
    grid-column: 4/5;
    grid-row: 4/5;
    margin-right: -20%;
    margin-top: 20%;

    @media only screen and (max-width: 600px) {
        margin-left: 0;
        margin-top: -5%;
    }

    @media only screen and (max-width: 400px) {
        margin-left: 0;
        margin-top: -140%;
    }
`;





