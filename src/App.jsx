import './App.css';
import Menu from './Menu';
import { useState } from "react";

const App = () => {

  const [position] = useState('fixed');

  return (
    <div className="App">
      <header className="App-header">
        <Menu position={position}/>
      </header>
    </div>
  );
}

export default App;
