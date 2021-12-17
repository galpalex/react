import React from "react";
import Checkbox from "./Checkbox";

const myInputs = [
  {
    id: 0,
    isChecked: false,
    text: "I read the term of the app",
  },
  {
    id: 1,
    isChecked: false,
    text: "I accept the term of the app",
  },
  {
    id: 2,
    isChecked: true,
    text: "I want to get the weekly news letter",
  },
  {
    id: 3,
    isChecked: true,
    text: "I want to get sales and offer",
  },
];

class App extends React.Component {
  render = () => {
    return (
      <div>
        {myInputs.map((input) => {
          return (
            <Checkbox
              isCheckedDefault={input.isChecked}
              inputText={input.text}
              key={input.id}
            />
          );
        })}
      </div>
    );
  };
}

export default App;
