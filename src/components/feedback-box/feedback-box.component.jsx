import React, {useContext} from 'react';
import {Button} from "./../button/button.component";
import {GameContext} from "./../../contexts/game.contexts";
import {FeedbackContainer, FeedbackMessage} from "./feedback-box.styles";

export const FeedbackBox = ({winner}) => {
    const {clearPlayerToken} = useContext(GameContext);
    
    return (
        <FeedbackContainer winner={winner}>
            <FeedbackMessage>{winner}</FeedbackMessage>
            <Button inverted={true} handleClick={clearPlayerToken}>Play again</Button>
        </FeedbackContainer>
    )
}
