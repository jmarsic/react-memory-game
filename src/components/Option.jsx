const Option = ({ categoryArray }) => {
  const optionElement = categoryArray.map(({ name, value }) => (
    <option key={value} value={value}>
      {name ? name : value}
    </option>
  ));

  return <>{optionElement}</>;
};

export default Option;
