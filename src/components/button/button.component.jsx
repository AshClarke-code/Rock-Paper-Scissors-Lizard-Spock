import React from 'react';
import { RulesButton } from './button.styles';

export const Button = ({
    children, 
    inverted = false,
    handleClick
}) => (
    <RulesButton isInverted={inverted} onClick={handleClick}>{children}</RulesButton>
);
