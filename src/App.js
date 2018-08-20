import React, { Component } from 'react';
import Link from './Link';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      links: [
        'hola'
      ]
    }
  }



  render() {
    return (
      <div className="App">

        <div className="header"> H E A D E R  </div>

        <div className="formLink">
          <input type="text" ref={((input) => { this.textInput = input })} />
        </div>

        <div><Link title={this.state.title} link={this.state.link} /> </div>

      </div >
    );
  }
}

export default App;
