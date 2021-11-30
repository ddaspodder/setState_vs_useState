import React from "react";

class ThisState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: 0 });
  }
  render() {
    console.log("this.state.count", this.state.count);
    return (
      <div>
        <h1>This State</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click Me!!</button>
      </div>
    );
  }
}
export default ThisState;
