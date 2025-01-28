import { decodeEntity } from "html-entities";

import EmojiButton from "./EmojiButton";

const MemoryCard = ({ handleFlip, emojis, selectedCards, matchedCards }) => {
  const cardElement = emojis.map((emoji, index) => {
    const selectedCardEntry = selectedCards.find(
      (card) => card.index === index
    );

    const matchedCardEntry = matchedCards.find((card) => card.index === index);

    const cardStyle = matchedCardEntry
      ? "matched"
      : selectedCardEntry
      ? "selected"
      : "";

    return (
      <li key={index} className="card-list-item">
        <EmojiButton
          content={decodeEntity(`${emoji.htmlCode}`)}
          handleClick={() => handleFlip(emoji.name, index)}
          selectedCard={selectedCardEntry}
          matchedCard={matchedCardEntry}
          style={cardStyle}
        />
      </li>
    );
  });

  return <ul className="cards-container">{cardElement}</ul>;
};

export default MemoryCard;
