import React, { Component } from 'react';
import Link from './Link';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Link title={"Title"} link={"Link"} /> </div>
      </div>
    );
  }
}

export default App;
