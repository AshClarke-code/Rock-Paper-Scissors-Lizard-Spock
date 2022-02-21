import React from 'react';
import {ScoreContainer, Heading, Number} from "./score.styles";

export const Score = ({wins}) => (
    <ScoreContainer>
        <Heading>Score</Heading>
        <Number>{wins}</Number>
    </ScoreContainer>
)
