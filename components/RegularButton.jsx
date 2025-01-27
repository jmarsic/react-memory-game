const RegularButton = ({ children, handleClick }) => {
  return <button className="btn" onClick={handleClick}>{children}</button>;
};

export default RegularButton;
