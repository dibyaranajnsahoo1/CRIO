import { Component } from "react";


export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.incrementCount}>Incremnt</button>
        <button onClick={this.decrementCount}>Decremnt</button>
      </div>
    );
  }
}
