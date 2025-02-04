import RegularButton from "./RegularButton.jsx";
import Select from "./Select.jsx";

const Form = ({ handleSubmit, handleChange }) => {
  // console.log(data);

  return (
    <div className="form-container">
      <form
        className="status-message-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="status-message">
          Customize the game by selecting an emoji category and a number of
          memory cards.
        </p>
        <Select handleChange={handleChange} />
        <RegularButton handleClick={handleSubmit}>Start game</RegularButton>
      </form>
    </div>
  );
};

export default Form;
