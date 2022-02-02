import React from 'react';
import {TokenContainer, IconContainer} from "./game-token.styles";
import Scissors from "./../../assets/images/icon-scissors.svg";
import Paper from "./../../assets/images/icon-paper.svg";
import Rock from "./../../assets/images/icon-rock.svg";
import Lizard from "./../../assets/images/icon-lizard.svg";
import Spock from "./../../assets/images/icon-spock.svg";

export const GameToken = ({
    tokenType = "Scissors"
}) => {

    const getTokenIcon = () => {
        switch(tokenType) {
            case "Paper":
                return Paper;
            case "Rock":
                return Rock;
            case "Lizard":
                return Lizard;
            case "Spock":
                return Spock;

            default: return Scissors;
        }
    };
    
    return (
        <TokenContainer tokenType={tokenType}>
            <IconContainer>
            <img src={getTokenIcon()} alt={`${tokenType} icon`} width="40%" height="50%"/>
            </IconContainer>
        </TokenContainer>
    )
}
