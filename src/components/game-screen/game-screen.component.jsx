import React, {useState} from "react";
import {SelectToken} from "./../select-token/select-token.component";
import {MatchUp} from "./../match-up/match-up.component";


export const GameScreen = ({handleWin}) => {
    const [playerToken, setPlayerToken] = useState("");

    const selectToken = event => setPlayerToken(event.target.id);
    const clearPlayerToken = event => setPlayerToken("");

    

    return playerToken ? <MatchUp playerToken={playerToken} handleClick={clearPlayerToken} handleWin={handleWin}/> : <SelectToken selectToken={selectToken}/>;
};