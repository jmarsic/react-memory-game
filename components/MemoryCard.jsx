const MemoryCard = ({ handleFlip }) => {
  const emojiArray = [
    "🦦",
    "🐢",
    "🦔",
    "🐢",
    "🦥",
    "🦦",
    "🦣",
    "🦣",
    "🦥",
    "🦔",
  ];

  const emojiElement = emojiArray.map((emoji, index) => {
    return (
      <li key={index}>
        <button onClick={handleFlip}>{emoji}</button>
      </li>
    );
  });

  return <ul>{emojiElement}</ul>;
};

export default MemoryCard;
