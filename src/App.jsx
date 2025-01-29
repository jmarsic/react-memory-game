import { useState, useEffect } from "react";

import Form from "../components/Form.jsx";
import MemoryCard from "../components/MemoryCard.jsx";
import AssistiveTechInfo from "../components/AssistiveTechInfo.jsx";
import GameOver from "../components/GameOver.jsx";

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        console.log("Match");
        setMatchedCards((prevMatch) => [...prevMatch, ...selectedCards]);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (emojisData.length && emojisData.length === matchedCards.length) {
      console.log("Well done, you match all cards");
      setAreAllCardsMatched(true);
    }
  }, [matchedCards]);

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

  const flipCard = (name, index) => {
    // console.log(`Card with name '${name}' at index [${index}] was clicked.`);

    if (selectedCards.length < 2) {
      setSelectedCards((prevCard) => [...prevCard, { name, index }]);
    } else if (selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  };

  const resetGame = () => {
    setIsGameRunning(false);
    setSelectedCards([]);
    setMatchedCards([]);
    setAreAllCardsMatched(false);
  };

  return (
    <main className="main">
      <h1 className="main-heading">MEMORY GAME</h1>
      {!isGameRunning && <Form handleSubmit={startGame} />}
      {isGameRunning && !areAllCardsMatched && (
        <AssistiveTechInfo
          matchedCards={matchedCards}
          emojisData={emojisData}
        />
      )}
      {areAllCardsMatched && <GameOver handleClick={resetGame} />}
      {isGameRunning && (
        <MemoryCard
          handleFlip={flipCard}
          emojis={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
    </main>
  );
};

export default App;
