import React, { Component } from 'react';
import Link from './Link';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      link: ''
    }
  }


  render() {
    return (
      <div className="App">

        <div className="formIdea">
          <form>
            <label>
              Title:
            </label>
            <input type="text" name="title" />
            <br />
            <label>
              Link:
            </label>
            <input type="text" name="link" />
            <br />
            <button type="submit"> Add new link </button>
          </form>

        </div>

        <div><Link title={"Title"} link={"Link"} /> </div>

      </div >
    );
  }
}

export default App;
