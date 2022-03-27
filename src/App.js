import React from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import {Button} from "./components/button/button.component";
import {GameScreen} from "./components/game-screen/game-screen.component";

function App() {

  return (
    <div className="App">
      <Header/>
      <GameScreen/>
      <Button>Rules</Button>
    </div>
  );
}

export default App;
