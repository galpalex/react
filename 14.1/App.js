import React from "react";

class App extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
  };
  componentDidMount() {
    this.nameInput.focus();
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              autoFocus
              ref={(input) => {
                this.nameInput = input;
              }}
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default App;
