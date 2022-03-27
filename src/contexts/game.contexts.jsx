import {createContext, useState} from "react";

const nullFunction = () => null;


export const GameContext = createContext({
    playerToken: "",
    score: 0,
    selectToken: nullFunction,
    clearPlayerToken: nullFunction,
    handleWin: nullFunction,
});

export const GameProvider = ({children}) => {
    const [playerToken, setPlayerToken] = useState("");
    let [score, setScore] = useState(0);

    const handleWin = () => setScore(score + 1);

    const selectToken = event => setPlayerToken(event.target.id);
    const clearPlayerToken = event => setPlayerToken("");

    const value = {
        playerToken, 
        selectToken, 
        clearPlayerToken, 
        handleWin,
        score
    };

    return (<GameContext.Provider value={value}>{children}</GameContext.Provider>)

}