import { useState } from "react";

import Form from "../components/Form.jsx";
import MemoryCard from "../components/MemoryCard.jsx";

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

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

      const randomIndencies = generateRandomIndencies();

      const randomEmojis = randomIndencies.map((index) => data[index]);

      const emojisArray = [...randomEmojis, ...randomEmojis];

      const shuffledEmojisArray = shuffleEmojis(emojisArray);

      setEmojisData(shuffledEmojisArray);

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
    return randomIndencies;
  };

  const shuffleEmojis = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const flipCard = () => {
    console.log("Card flipped");
  };

  return (
    <main className="main">
      <h1 className="main-heading">MEMORY GAME</h1>
      {!isGameRunning && <Form handleSubmit={startGame} />}
      {isGameRunning && (
        <MemoryCard handleFlip={flipCard} emojis={emojisData} />
      )}
    </main>
  );
};

export default App;
