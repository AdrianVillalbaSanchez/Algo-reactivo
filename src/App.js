import React, { Component } from 'react';
import Link from './Link';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Link brand={"Gibson"} model={"Les Paul"} year={"1959"} /> </div>
      </div>
    );
  }
}

export default App;
