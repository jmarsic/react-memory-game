import { useEffect, useRef } from "react";

import ReagularButton from "./RegularButton";

const GameOver = ({ handleClick }) => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div className="game-over-container" ref={divRef} tabIndex={-1}>
      <p className="game-over-text">You've matched all the memory cards!</p>
      <ReagularButton handleClick={handleClick}>Play again</ReagularButton>
    </div>
  );
};

export default GameOver;
