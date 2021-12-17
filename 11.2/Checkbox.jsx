import React from "react";

const Checkbox = ({ isCheckedDefault, inputText }) => {
  return (
    <div>
      <input defaultChecked={isCheckedDefault} type="checkbox" />
      <label>{inputText}</label>
    </div>
  );
};

export default Checkbox;
