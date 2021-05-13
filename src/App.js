import { useState } from "react";
import "./App.css";

function Tile({ value, onClick }) {
  return (
    <div className="TileContainer" onClick={onClick}>
      {value}
    </div>
  );
}

function App() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [elements, setElements] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const mark = (index) => {
    if (elements[index]) {
      return;
    }

    const newElements = [...elements];
    newElements[index] = isFirstPlayer ? "X" : "O";

    setElements(newElements);
    setIsFirstPlayer(!isFirstPlayer);
  };

  return (
    <div className="App">
      <div className="board">
        {elements.map((element, index) => (
          <Tile value={element} onClick={() => mark(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
