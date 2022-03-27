import React, {useContext} from 'react';
import {GameContext} from "./../../contexts/game.contexts";
import {ScoreContainer, Heading, Number} from "./score.styles";

export const Score = () => {
    const {score} = useContext(GameContext);
    
    return ( 
    <ScoreContainer>
        <Heading>Score</Heading>
        <Number>{score}</Number>
    </ScoreContainer>
    )
}
