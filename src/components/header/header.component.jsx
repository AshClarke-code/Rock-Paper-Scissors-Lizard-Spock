import React from 'react';
import {Score} from "./../score/score.component";
import {HeaderContainer, Title} from './header.styles';

export const Header = () => (
    <HeaderContainer>
        <Title>Rock Paper Scissors Lizard Spock</Title>
        <Score/>
    </HeaderContainer>
);
