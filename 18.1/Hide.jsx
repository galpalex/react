import React, { useState } from "react";
import "./style.css";

const Hide = ({ text, maxLength }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (text.length <= maxLength) {
    return <div>{text}</div>;
  } else if (showAll) {
    return (
      <div>
        {text}
        <div onClick={showLess} className="text">
          Show less
        </div>
      </div>
    );
  }

  const toShow = text.substring(0, maxLength) + "...";
  return (
    <div>
      {toShow}
      <div onClick={showMore} className="text">
        Read more
      </div>
    </div>
  );
};

export default Hide;
