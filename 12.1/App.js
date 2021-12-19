import React from "react";
import axios from "axios";
import "./style.css";

class App extends React.Component {
  state = {
    randomJoke: "",
    categoryList: [],
    category: "",
    randomJokeFromList: "",
  };

  randomJokes = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ randomJoke: response.data.value });
  };
  categoryListJokes = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categoryList: response.data });
  };
  categoryListRandomJokes = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${this.state.category}`
    );
    this.setState({ randomJokeFromList: response.data.value });
  };

  componentDidMount = () => {
    this.categoryListJokes();
  };

  render() {
    return (
      <div>
        <div className="random-joke-container">
          <button
            onClick={() => {
              this.randomJokes();
            }}
          >
            Get random Chuck Norris joke
          </button>
          <div>
            <p> {this.state.randomJoke}</p>
          </div>
        </div>
        <div className="random-joke-container-per-category">
          <h2>Choose Chuck Norris joke from folowing categories:</h2>
          {this.state.categoryList.map((categoryItem) => {
            return (
              <button
                key={categoryItem}
                onClick={() => {
                  this.setState({ category: categoryItem }, () => {
                    this.categoryListRandomJokes();
                  });
                }}
              >
                {categoryItem}
              </button>
            );
          })}
          <div className="joke-category-container">
            <p>{this.state.randomJokeFromList}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
