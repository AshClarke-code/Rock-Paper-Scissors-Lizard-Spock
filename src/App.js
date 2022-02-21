import React from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import {SelectToken} from "./components/select-token/select-token.component";
import {Button} from "./components/button/button.component";
import {MatchUp} from  "./components/match-up/match-up.component";

function App() {


  return (
    <div className="App">
      <Header/>
      {/* <SelectToken/> */}
      <MatchUp/>
      <Button/>
    </div>
  );
}

export default App;
