import React, { useState } from "react";
import Search from "./Search";

const Display = () => {
  const [isDisplay, setIsDispay] = useState(true);

  const toggle = () => {
    setIsDispay(!isDisplay);
  };

  return (
    <div>
      <button onClick={() => toggle()}>
        {isDisplay ? "Hide Countries" : "Display Countries"}
      </button>
      {isDisplay && <Search />}
    </div>
  );
};

export default Display;
