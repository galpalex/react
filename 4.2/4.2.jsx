import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <img src={props.avatar} alt="card" />
      <div>
        <h3>{props.title}</h3>
        <div className="subtitle">
          {props.description}
          <div className="links">
            <div>
              <a href={props.linkShare}>SHARE</a>
            </div>
            <div>
              <a href={props.linkExplore}>EXPLORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
