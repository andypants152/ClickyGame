import React, { Component } from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import AllDogs from "./images/dogs";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    dogs: []
  }
  componentDidMount() {
    this.setState({ dogs: AllDogs })
  }
  handleClick = id => {
    const index = this.state.dogs.map(function (x) { return x.id; }).indexOf(id);

    if (this.state.dogs[index].clicked) {
      let temp = this.state.dogs;
      temp.forEach(dog => dog.clicked = false)
      this.setState({ score: 0, dogs: temp })

    } else {
      const newScore = this.state.score + 1;
      if (newScore > this.state.highScore) {
        this.setState({ score: newScore, highScore: newScore });
      }
      else {
        this.setState({ score: newScore })
      }
      let temp = this.state.dogs;
      temp[index].clicked = true;
      this.setState({ dogs: temp })
    }

  }
  render() {
    return (
      <div>
        <Header score={this.state.score} highScore={this.state.highScore} />
        {this.state.dogs.map(dog => (
          <Card src={dog.image} key={dog.id} onClick={() => this.handleClick(dog.id)} />
        ))}
      </div>
    );
  }
}

export default App;
