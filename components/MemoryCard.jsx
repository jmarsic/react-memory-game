import { decodeEntity } from "html-entities";

const MemoryCard = ({ handleFlip, emojis }) => {

  const emojiElement = emojis.map((emoji, index) => {
    return (
      <li key={index} className="card-list-item">
        <button onClick={handleFlip} className="card">
          {decodeEntity(`${emoji.htmlCode}`)}
        </button>
      </li>
    );
  });

  return <ul className="cards-container">{emojiElement}</ul>;
};

export default MemoryCard;
