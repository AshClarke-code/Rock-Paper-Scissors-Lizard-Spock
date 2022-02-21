import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import {Button} from "./components/button/button.component";
import {GameScreen} from "./components/game-screen/game-screen.component";

function App() {
  let [wins, setWins] = useState(0);

  const handleWin = () => setWins(wins + 1);

  return (
    <div className="App">
      <Header wins={wins}/>
      <GameScreen handleWin={handleWin}/>
      <Button>Rules</Button>
    </div>
  );
}

export default App;
