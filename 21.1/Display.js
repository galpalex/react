import React, { useState, useEffect, useRef } from "react";

const Display = () => {
  const [isDisplay, setIsDispay] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    setIsDispay(!isDisplay);
  };

  useEffect(() => {
    if (isDisplay) {
      inputRef.current.focus();
    }
  }, [isDisplay]);

  return (
    <div>
      <button onClick={() => focus()}>{isDisplay ? "save" : "edit"}</button>
      {isDisplay && (
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
    </div>
  );
};

export default Display;
