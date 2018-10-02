import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  state = {
    score: 0,
    highScore: 0
  }
  render() {
    return (
      <div>
        <Header score={this.state.score} highScore={this.state.highScore}/>
        <Card />
      </div>
    );
  }
}

export default App;
