import Option from "./Option.jsx";

import { data } from "../utils/data";

const Select = ({ handleChange }) => {
  const selectElement = Object.entries(data).map(([key, value]) => (
    <div key={key} className="selection-wrapper">
      <label htmlFor={key} className="section-label">
        Select a {key}:{" "}
      </label>
      <select
        name={key}
        id={key}
        onChange={handleChange}
        className="form-category-selection"
      >
        <Option categoryArray={value} />
      </select>
    </div>
  ));

  return <>{selectElement}</>;
};

export default Select;
