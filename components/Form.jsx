import RegularButton from "./RegularButton";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div className="form-container">
      <form className="status-message-container">
        <div className="selection-wrapper">
          <label htmlFor="category" className="section-label">
            Which category you prefer:{" "}
          </label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            className="form-category-selection"
          >
            <option value="animals-and-nature">Animals and nature</option>
            <option value="food-and-drink">Food and drink</option>
            <option value="travel-and-places">Travel and places</option>
            <option value="objects">Objects</option>
            <option value="symbols">Symbols</option>
          </select>
        </div>
        <label htmlFor="number" className="section-label">
          How many cards would you like to generate:{" "}
        </label>
        <div className="selection-wrapper">
          <select
            name="number"
            id="number"
            onChange={handleChange}
            className="form-category-selection"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <RegularButton handleClick={handleSubmit}>Start game</RegularButton>
      </form>
    </div>
  );
};

export default Form;
