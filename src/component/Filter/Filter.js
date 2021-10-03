import PropTypes from "prop-types";

const Filter = ({ filterInput, filterValue }) => {
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={filterInput}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filterInput: PropTypes.func,
  filterValue: PropTypes.string,
};
