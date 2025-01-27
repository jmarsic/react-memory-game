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
      <li key={index} className="card-list-item">
        <button onClick={handleFlip} className="card">
          {emoji}
        </button>
      </li>
    );
  });

  return <ul className="cards-container">{emojiElement}</ul>;
};

export default MemoryCard;
