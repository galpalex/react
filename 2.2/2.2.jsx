import React from "react";

const Interpolate = () => {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div>
      <div style={{ textTransform: "capitalize" }}>{data.join(" ")}</div>
      <div>
        {number1}+{number2}={number1 + number2}
      </div>
      The "{string}" length is {string.length}
    </div>
  );
};

export default Interpolate;
