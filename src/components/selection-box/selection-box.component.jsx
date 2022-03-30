import React from 'react';
import {GameToken} from "../game-token/game-token.component";
import {SelectionContainer, ContainerHeading, TokenContainer} from "./selection-box.styles";



export const SelectionBox = ({
    heading,
    isActive,
    token
}) => (
        <SelectionContainer>
        <ContainerHeading>{heading}</ContainerHeading>
        <TokenContainer isActive={isActive}>
          {
            token ? <GameToken isBigToken={true} tokenType={token}/> : null
          }
        </TokenContainer>
      </SelectionContainer>
    );
