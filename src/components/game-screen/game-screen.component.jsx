import React, {useContext} from "react";
import {SelectToken} from "./../select-token/select-token.component";
import {MatchUp} from "./../match-up/match-up.component";
import {GameContext} from "./../../contexts/game.contexts";


export const GameScreen = () => {
    const {playerToken} = useContext(GameContext);

    return playerToken ? <MatchUp /> : <SelectToken/>;
};