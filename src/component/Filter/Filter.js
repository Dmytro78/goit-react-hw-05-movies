import PropTypes from "prop-types";

export default function Filter ({ value, onChange }) {
  return (
    <label>
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};


Filter.propTypes = {
  filterInput: PropTypes.func,
  filterValue: PropTypes.string,
};
