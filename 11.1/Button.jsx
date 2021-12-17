import React from "react";

const Button = ({ color, callBack }) => {
  return (
    <div>
      <button
        onClick={(e) => callBack(e.target.textContent)}
        style={{
          color: "black",
          background: color,
        }}
      >
        {color}
      </button>
    </div>
  );
};

export default Button;
