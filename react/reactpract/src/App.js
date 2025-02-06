import './App.css';
import { Component } from "react";
// import { Upadate } from './components/Upadate';
import { Stock } from './components/Stock';
import { Hello } from './components/function/Hello';
import { Counter } from './components/function/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      userId: 1,  // Initialize state correctly
    };
  }

  render() {
    return (
      <div>
        {/* <h1>Hello</h1>
        <input
          type="number" // Ensure this is a number input
          value={this.state.userId}
          onChange={(e) => this.setState({ userId: e.target.value })}
        />
        <p>{this.state.userId}</p>
        <Upadate userId={this.state.userId} /> Pass userId as prop */}
        {/* <button  onClick={()=>this.setState({flag:!this.state.flag})}> Togle</button>

        {this.state.flag && <Stock/>} */}
        {/* <Hello name="dibya"/> */}
        <Counter/>
      </div>
    );
  }
}

export default App;
