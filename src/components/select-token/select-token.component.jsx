import React from 'react';
import Pentagon from "./../../assets/images/bg-pentagon.svg";
import {GameToken} from "./../game-token/game-token.component";
import {tokenTypes} from "./../../utils/tokenTypes";
import {SelectTokenContainer, ScissorsContainer, RockContainer, PaperContainer, LizardContainer, SpockContainer} from "./select-token.styles";

export const SelectToken = () => (
        <SelectTokenContainer imageUrl={Pentagon}>
            <ScissorsContainer>
                <GameToken tokenType={tokenTypes.SCISSORS} />
            </ScissorsContainer>
            <SpockContainer>
                <GameToken tokenType={tokenTypes.SPOCK}/>
            </SpockContainer>
            <PaperContainer>
                <GameToken tokenType={tokenTypes.PAPER} />
            </PaperContainer>
            <LizardContainer>
                <GameToken tokenType={tokenTypes.LIZARD} />
            </LizardContainer>
            <RockContainer>
                <GameToken tokenType={tokenTypes.ROCK} />
            </RockContainer>
        </SelectTokenContainer>
    );

