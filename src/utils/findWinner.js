import {tokenTypes} from "./tokenTypes";


/*
 * returns 0 if player lost
 * returns 1 if player won
 * returns 2 if draw
*/


export const findWinner = (playerToken, computerToken) => {
    if(playerToken === computerToken) return 2;

    switch(playerToken) {
        case tokenTypes.PAPER:
            return computerToken === tokenTypes.ROCK || computerToken === tokenTypes.SPOCK ? 1 : 0;
        case tokenTypes.ROCK:
            return computerToken === tokenTypes.LIZARD || computerToken === tokenTypes.SCISSORS ? 1 : 0;
        case tokenTypes.LIZARD:
            return computerToken === tokenTypes.SPOCK || computerToken === tokenTypes.PAPER ? 1 : 0;
        case tokenTypes.SPOCK:
            return computerToken === tokenTypes.ROCK || computerToken === tokenTypes.SCISSORS ? 1 : 0;
        case tokenTypes.SCISSORS:
            return computerToken === tokenTypes.PAPER || computerToken === tokenTypes.LIZARD ? 1 : 0;

        default: return;
    }
}