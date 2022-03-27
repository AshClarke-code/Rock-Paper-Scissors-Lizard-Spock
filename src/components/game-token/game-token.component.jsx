import React, {useContext} from 'react';
import {tokenTypes} from "./../../utils/tokenTypes";
import Scissors from "./../../assets/images/icon-scissors.svg";
import Paper from "./../../assets/images/icon-paper.svg";
import Rock from "./../../assets/images/icon-rock.svg";
import Lizard from "./../../assets/images/icon-lizard.svg";
import Spock from "./../../assets/images/icon-spock.svg";
import {GameContext} from "./../../contexts/game.contexts";
import {TokenContainer, IconContainer} from "./game-token.styles";


export const GameToken = ({
    tokenType = "SPOCK",
    isBigToken = false
}) => {
    const {selectToken} = useContext(GameContext);

    const getTokenIcon = () => {
        switch(tokenType) {
            case tokenTypes.PAPER:
                return Paper;
            case tokenTypes.ROCK:
                return Rock;
            case tokenTypes.LIZARD:
                return Lizard;
            case tokenTypes.SPOCK:
                return Spock;

            default: return Scissors;
        }
    };
    
    return (
        <TokenContainer tokenType={tokenType} id={tokenType} onClick={selectToken} isBigToken={isBigToken}>
            <IconContainer id={tokenType} onClick={selectToken} >
            <img src={getTokenIcon()} alt={`${tokenType} icon`} width="40%" height="50%" id={tokenType} onClick={selectToken}/>
            </IconContainer>
        </TokenContainer>
    )
}
