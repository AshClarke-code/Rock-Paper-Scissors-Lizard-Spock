import React, { useEffect, useState} from 'react';
import {GameToken} from "./../game-token/game-token.component";
import {selectComputerToken} from "./../../utils/selectToken";
import {findWinner} from "./../../utils/findWinner";
import {Button} from "./../button/button.component";
import { MatchUpContainer, SelectionContainer, ContainerHeading, TokenContainer, FeedbackContainer, FeedbackMessage} from './match-up.styles';

export const MatchUp = ({
  playerToken,
  handleClick,
  handleWin
}) => {
  const [playerActive, setPlayerActive]= useState(false);
  const [houseActive, setHouseActive] = useState(false);
  const [houseToken, setHouseToken] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const token = selectComputerToken();
    setTimeout(() => setHouseToken(token), 1000);
    const victor = findWinner(playerToken, token);
    setTimeout(() => {
      if(victor === 2) setWinner("draw");
      if(victor === 0) setWinner("you lost");
      if(victor === 1) {
        setWinner("you won");
        handleWin();
      };
    }, 1300);
    setTimeout(() => {
      if(victor === 2) return;
      if(victor === 0) setHouseActive(true);
      if(victor === 1) setPlayerActive(true);
    }, 2000);
  }, []);

  return (
    <MatchUpContainer>
      <SelectionContainer>
        <ContainerHeading>You picked</ContainerHeading>
        <TokenContainer isActive={playerActive}>
          <GameToken isBigToken={true} tokenType={playerToken}/>
        </TokenContainer>
      </SelectionContainer>
      <FeedbackContainer winner={winner}>
          <FeedbackMessage>{winner}</FeedbackMessage>
          <Button inverted={true} handleClick={handleClick}>Play again</Button>
      </FeedbackContainer>
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
