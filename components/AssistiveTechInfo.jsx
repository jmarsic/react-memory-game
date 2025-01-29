const AssistiveTechInfo = ({ matchedCards, emojisData }) => {
  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      <h2>Game status</h2>
      <p>Number of matched pairs: {matchedCards.length / 2}.</p>
      <p>
        Number of cards left to match: {emojisData.length - matchedCards.length}
        .
      </p>
    </div>
  );
};

export default AssistiveTechInfo;
