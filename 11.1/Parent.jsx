import React from "react";
import Button from "./Button";

const colors = [
  { color: "blue", id: 0 },
  { color: "red", id: 1 },
  { color: "yellow", id: 2 },
];
class Parent extends React.Component {
  state = { selectedColor: "" };

  updateColor = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div>
        {colors.map((btn) => {
          return (
            <Button
              callBack={this.updateColor}
              key={btn.id}
              color={btn.color}
            />
          );
        })}
        <h1>The color selected is : {this.state.selectedColor}</h1>
      </div>
    );
  }
}

export default Parent;
