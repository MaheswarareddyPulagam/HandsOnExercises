import React, { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }


  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };


  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };


  sayHello = () => {
    alert("Hello! Welcome to React Events");
  };


  increaseButton = () => {
    this.increment();
    this.sayHello();
  };


  welcomeMessage = (message) => {
    alert(message);
  };


  onPress = () => {
    alert("I was clicked");
  };


  render() {

    return (
      <div>

        <h1>Event Examples App</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increaseButton}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>


        <br /><br />


        <button onClick={() => this.welcomeMessage("welcome")}>
          Say Welcome
        </button>


        <br /><br />


        <button onClick={this.onPress}>
          OnPress
        </button>

      </div>
    );
  }
}

export default Counter;