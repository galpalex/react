import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  copyToClipboard = (e) => {
    // option1
    // this.textArea.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(this.state.term); //option2
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>What is the meaning of life?</label>
            <input
              ref={(textarea) => (this.textArea = textarea)}
              type="textarea"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
          <button onClick={this.copyToClipboard}>Copy</button>
        </form>
      </div>
    );
  }
}
export default App;
