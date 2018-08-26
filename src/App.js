import React, { Component } from 'react';
import Link from './components/Link';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      linkTitle: '',
      links: []
    }
  }

  updateLinkTitle(linkTitle) {
    this.setState({ linkTitle: linkTitle.target.value })
  }

  addLink() {
    if (this.state.linkTitle === '') { return }

    let linksArray = this.state.links;
    linksArray.push(this.state.linkTitle);
    this.setState({ linkTitle: '' });
    this.textInput.focus();
  }

  deleteLink(index) {
    let linksArray = this.state.links;
    linksArray.splice(index, 1);
    this.setState({ links: linksArray })
  }


  render() {

    let links = this.state.links.map((val, key) => {
      return <Link key={key} title={val} deleteMethod={() => this.deleteLink(key)} />
    })

    return (
      <div className="App">

        <div className="header"> SAVE YOUR LINKS! </div>

        <div className="formLink">
          <div> Title: <input type="text"
            ref={((input) => { this.textInput = input })}
            className="textInput"
            value={this.state.linkTitle}
            onChange={linkTitle => this.updateLinkTitle(linkTitle)}
          /> </div>
          <br />

          <div className="textAreaForm">
            Description: <textarea className="textArea" name="message" rows="5" cols="20"></textarea>
          </div>

          <div> Link:
                <input type="text" className="linkInput" />
          </div>
          <div className="btn" onClick={this.addLink.bind(this)}> Add new link </div>
        </div>

        <div> {links} </div>

      </div >
    );
  }
}

export default App;
