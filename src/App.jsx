import { useState } from "react";

import Form from "../components/Form.jsx";
import MemoryCard from "../components/MemoryCard.jsx";

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);

  const startGame = async () => {
    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );
      if (!response.ok) {
        throw new Error(
          `Couldn't fetch data. \nResponse status: ${response.status}.`
        );
      }

      const data = await response.json();

      console.log(data);

      const emojiArr = data.slice(0, 5);

      console.log(emojiArr);

      generateRandomIndencies();

      setIsGameRunning(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const generateRandomIndencies = () => {
    const randomIndencies = [];
    while (randomIndencies.length < 5) {
      const generatedNumber = Math.floor(Math.random() * 107);
      if (!randomIndencies.includes(generatedNumber)) {
        randomIndencies.push(generatedNumber);
      }
    }
    console.log(randomIndencies);
  };

  const flipCard = () => {
    console.log("Card flipped");
  };

  return (
    <main className="main">
      <h1 className="main-heading">MEMORY GAME</h1>
      {!isGameRunning && <Form handleSubmit={startGame} />}
      {isGameRunning && <MemoryCard handleFlip={flipCard} />}
    </main>
  );
};

export default App;
