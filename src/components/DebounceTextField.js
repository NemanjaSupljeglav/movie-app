//React
import React from "react";

//React-debounce
import { DebounceInput } from "react-debounce-input";

const Debounce = props => {
  const { placeholder, length, time, onChange } = props;

  return (
    <DebounceInput
      className="w-full px-6 py-3 border rounded"
      placeholder={placeholder}
      minLength={length}
      debounceTimeout={time}
      onChange={event => onChange(event.target.value)}
    />
  );
};

Debounce.defaultProps = {
  placeholder: "Search",
  length: 3,
  time: 300,
  onChange: () => {}
};
export default Debounce;
