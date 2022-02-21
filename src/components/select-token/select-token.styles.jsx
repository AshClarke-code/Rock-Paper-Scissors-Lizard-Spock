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

`;

export const ScissorsContainer = styled.div`
    grid-column: 3/4;
    margin-top: -55%;
    margin-left: -15%;
`;

export const SpockContainer = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
    margin-left: -20%;
    margin-top: -20%;
`;

export const PaperContainer = styled.div`
    grid-column: 5/6;
    grid-row: 2/3;
    margin-left: -20%;
    margin-top: -20%;
`;

export const LizardContainer = styled.div`
    grid-column: 2/3;
    grid-row: 4/5;
    margin-left: -20%;
    margin-top: 20%;
`;

export const RockContainer = styled.div`
    grid-column: 4/5;
    grid-row: 4/5;
    margin-right: -20%;
    margin-top: 20%;
`;





