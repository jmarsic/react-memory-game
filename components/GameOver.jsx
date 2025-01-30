import { useEffect, useRef } from "react";

import ReagularButton from "./RegularButton";

const GameOver = ({ handleClick }) => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div
      className="status-message-container"
      aria-live="polite"
      aria-atomic="true"
      ref={divRef}
      tabIndex={-1}
    >
      <p className="status-message">You've matched all the memory cards!</p>
      <ReagularButton handleClick={handleClick}>Play again</ReagularButton>
    </div>
  );
};

export default GameOver;
