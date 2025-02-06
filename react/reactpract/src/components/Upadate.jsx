import { Component } from "react";

export class Upadate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  async fetchEmail(userId) {
    const res = await fetch(`https://reqres.in/api/users/${userId}`);
    const data = await res.json();
    this.setState({ email: data.data?.email || "Email not found" });
  }

  componentDidMount() {
    this.fetchEmail(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    // Check if the userId has changed
    if (prevProps.userId !== this.props.userId) {
      this.fetchEmail(this.props.userId);  // Fetch new email
    }
  }

  render() {
    return (
      <div>
        <h1>Mount</h1>
        <p>Email: {this.state.email ? this.state.email : "Loading..."}</p>
      </div>
    );
  }
}
