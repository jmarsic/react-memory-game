const EmojiButton = ({
  content,
  handleClick,
  selectedCard,
  matchedCard,
  style,
}) => {
  const btnContent = matchedCard || selectedCard ? content : "?";
  return (
    <button className={`card ${style}`} onClick={handleClick}>
      {btnContent}
    </button>
  );
};

export default EmojiButton;
