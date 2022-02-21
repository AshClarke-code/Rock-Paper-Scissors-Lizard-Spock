import React, {useState, useEffect} from 'react';
import Pentagon from "./../../assets/images/bg-pentagon.svg";
import {GameToken} from "./../game-token/game-token.component";
import {tokenTypes} from "./../../utils/tokenTypes";
import {SelectTokenContainer, ScissorsContainer, RockContainer, PaperContainer, LizardContainer, SpockContainer} from "./select-token.styles";

export const SelectToken = () => {
    const [playerToken, setPlayerToken] = useState("");

    useEffect(() => console.log(playerToken), [playerToken]);

    const selectToken = event => setPlayerToken(event.target.id);
  return (
    <SelectTokenContainer imageUrl={Pentagon}>
        <ScissorsContainer>
            <GameToken tokenType={tokenTypes.SCISSORS} handleClick={selectToken}/>
        </ScissorsContainer>
        <SpockContainer>
            <GameToken tokenType={tokenTypes.SPOCK} handleClick={selectToken}/>
        </SpockContainer>
        <PaperContainer>
            <GameToken tokenType={tokenTypes.PAPER} handleClick={selectToken}/>
        </PaperContainer>
        <LizardContainer>
            <GameToken tokenType={tokenTypes.LIZARD} handleClick={selectToken}/>
        </LizardContainer>
        <RockContainer>
            <GameToken tokenType={tokenTypes.ROCK} handleClick={selectToken}/>
        </RockContainer>
        
        
        
    </SelectTokenContainer>
    );
};
