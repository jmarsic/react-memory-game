import { decodeEntity } from "html-entities";

const EmojiButton = ({
  emoji,
  index,
  handleClick,
  selectedCard,
  matchedCard,
  style,
}) => {
  const btnContent =
    matchedCard || selectedCard ? decodeEntity(`${emoji.htmlCode}`) : "?";

  const btnAria = matchedCard
    ? `${emoji.name}. Matched.`
    : selectedCard
    ? `${emoji.name}. "Not matched yet.`
    : "Card upside down.";

  return (
    <button
      className={`card ${style}`}
      onClick={selectedCard ? null : handleClick}
      disabled={matchedCard}
      aria-label={`Position ${index + 1}: ${btnAria}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
};

export default EmojiButton;
