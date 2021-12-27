import React from "react";
import Hide from "./Hide";

const text =
  "Panormus and Hasdrubal pressed on to the city walls. Once he arrived, Metellus countered the elephants with a hail of javelins from earthworks dug near the walls. Infuriated by this missile fire, the elephants fled through the Carthaginian infantry.";

const App = () => {
  return (
    <div>
      <Hide text={text} maxLength={70} />
    </div>
  );
};
export default App;
