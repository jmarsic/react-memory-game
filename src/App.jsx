import { useState } from "react";

import Form from "../components/Form.jsx";
import MemoryCard from "../components/MemoryCard.jsx";

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);

  const startGame = () => {
    setIsGameRunning(true);
  };

  const flipCard = () => {
    console.log("Card flipped");
  };

  return (
    <>
      <h1>Memory game</h1>
      {!isGameRunning && <Form handleSubmit={startGame} />}
      {isGameRunning && <MemoryCard handleFlip={flipCard} />}
    </>
  );
};

export default App;
