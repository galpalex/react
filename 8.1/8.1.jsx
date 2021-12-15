import React from "react";
import "./style.css";

class PickColor extends React.Component {
  state = { favoriteColor: "pink" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  }
  componentDidUpdate() {
    document.querySelector(
      "#newDiv"
    ).innerHTML = `The updated favorite color is <span style= "color: ${this.state.favoriteColor};" >${this.state.favoriteColor}</span>`;
  }

  render() {
    return (
      <div className="box">
        <h1>
          My favorite color is:
          <span style={{ color: this.state.favoriteColor }}>
            {" "}
            {this.state.favoriteColor}
          </span>
        </h1>
        <div id="newDiv"></div>
      </div>
    );
  }
}

export default PickColor;
