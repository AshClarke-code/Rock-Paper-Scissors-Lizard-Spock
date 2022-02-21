import {tokenTypes} from "./tokenTypes";


export const selectComputerToken = () => {
    const tokenMap = [ tokenTypes.ROCK, tokenTypes.PAPER, tokenTypes.SCISSORS, tokenTypes.LIZARD, tokenTypes.SPOCK ];
    const selectionNumber = Math.floor(Math.random() * 5);
    return tokenMap[selectionNumber];
};