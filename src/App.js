import React, { Component } from 'react';
import Card from './Card';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Card brand={"Gibson"} model={"Les Paul"} year={"1959"} />
      </div>
    );
  }
}

export default App;
