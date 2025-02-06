import { Component } from "react";

export class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();  // Prevent the default form submission
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" autoComplete="off" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
