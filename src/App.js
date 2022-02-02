import './App.scss';
import {Header} from "./components/header/header.component";
import {GameToken} from "./components/game-token/game-token.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <GameToken/>
    </div>
  );
}

export default App;
