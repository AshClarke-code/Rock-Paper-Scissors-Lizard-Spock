import React, { useEffect, useState, useContext} from 'react';
import {selectComputerToken} from "./../../utils/selectToken";
import {findWinner} from "./../../utils/findWinner";
import {FeedbackBox} from "./../feedback-box/feedback-box.component";
import {SelectionBox} from "./../selection-box/selection-box.component";
import {GameContext} from "./../../contexts/game.contexts";
import { MatchUpContainer} from './match-up.styles';

export const MatchUp = () => {
  const {handleWin, playerToken}  = useContext(GameContext);
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
    }, 1600);
    setTimeout(() => {
      if(victor === 2) return;
      if(victor === 0) setHouseActive(true);
      if(victor === 1) setPlayerActive(true);
    }, 2000);
  }, [playerToken]);

  return (
    <MatchUpContainer>
      <SelectionBox heading="You picked" isActive={playerActive} token={playerToken}/>
      <FeedbackBox winner={winner}/>
      <SelectionBox heading="The house picked" isActive={houseActive} token={houseToken}/>
    </MatchUpContainer>
  );
};
