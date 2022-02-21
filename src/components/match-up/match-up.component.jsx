import React, { useEffect, useState} from 'react';
import {GameToken} from "./../game-token/game-token.component";
import {selectComputerToken} from "./../../utils/selectToken";
import {findWinner} from "./../../utils/findWinner";
import { MatchUpContainer, SelectionContainer, ContainerHeading, TokenContainer } from './match-up.styles';

export const MatchUp = () => {
  const [playerActive, setPlayerActive]= useState(false);
  const [houseActive, setHouseActive] = useState(false);
  const [houseToken, setHouseToken] = useState("");

  useEffect(() => {
    const token = selectComputerToken();
    setTimeout(() => setHouseToken(token), 1000);
    setTimeout(() => {
      if(findWinner("SPOCK", token) === 2) return;
      if(findWinner("SPOCK", token) === 1) setPlayerActive(true);
      if(findWinner("SPOCK", token) === 0) setHouseActive(true);
    }, 1500);
  }, []);

  return (
    <MatchUpContainer>
      <SelectionContainer>
        <ContainerHeading>You picked</ContainerHeading>
        <TokenContainer isActive={playerActive}>
          <GameToken isBigToken={true}/>
        </TokenContainer>
      </SelectionContainer>
      <SelectionContainer>
        <ContainerHeading>The house picked</ContainerHeading>
        <TokenContainer isActive={houseActive}>
          {
            houseToken ? <GameToken isBigToken={true} tokenType={houseToken}/> : null
          }
        </TokenContainer>
      </SelectionContainer>
    </MatchUpContainer>
  );
};
