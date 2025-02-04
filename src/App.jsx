import { useState, useEffect } from "react";

import Form from "./components/Form.jsx";
import MemoryCard from "./components/MemoryCard.jsx";
import AssistiveTechInfo from "./components/AssistiveTechInfo.jsx";
import GameOver from "./components/GameOver.jsx";
import ErrorCard from "./components/ErrorCard.jsx";

const App = () => {
  const initialFormData = {
    category: "animals-and-nature",
    number: 10,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        setMatchedCards((prevMatch) => [...prevMatch, ...selectedCards]);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (emojisData.length && emojisData.length === matchedCards.length) {
      setAreAllCardsMatched(true);
    }
  }, [matchedCards]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "number" ? Number(value) : value,
    }));
  };

  const startGame = async () => {
    try {
      const response = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${formData.category}`
      );
      if (!response.ok) {
        throw new Error(
          `Couldn't fetch data. \nResponse status: ${response.status}.`
        );
      }

      const data = await response.json();

      const randomIndencies = generateRandomIndencies();
      console.log(randomIndencies);

      const randomEmojis = randomIndencies.map((index) => data[index]);
      console.log(randomEmojis);

      const emojisArray = [...randomEmojis, ...randomEmojis];

      const shuffledEmojisArray = shuffleEmojis(emojisArray);

      setEmojisData(shuffledEmojisArray);

      setIsGameRunning(true);
    } catch (err) {
      setIsError(true);
      console.error(err.message);
    }
  };

  const generateRandomIndencies = () => {
    const randomIndencies = [];
    while (randomIndencies.length < formData.number / 2) {
      const generatedNumber = Math.floor(Math.random() * 88);
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

  const resetError = () => {
    setIsError(false);
  };

  return (
    <main className="main">
      <h1 className="main-heading">MEMORY GAME</h1>
      {!isGameRunning && !isError && (
        <Form handleSubmit={startGame} handleChange={handleFormChange} />
      )}
      {isError && <ErrorCard handleClick={resetError} />}
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
