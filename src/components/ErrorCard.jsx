import { useEffect, useRef } from "react";

import RegularButton from "./RegularButton.jsx";

const ErrorCard = ({ handleClick }) => {
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
      <p className="status-message">Sorry there was an error.</p>
      <p className="status-message">
        Please come back later or click the button below to try restarting the
        game.
      </p>
      <RegularButton handleClick={handleClick}>Restart game</RegularButton>
    </div>
  );
};

export default ErrorCard;
