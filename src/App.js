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

        <div className="header"> H E A D E R  </div>

        <div className="formLink">
          <input type="text"
            ref={((input) => { this.textInput = input })}
            className="textInput"
            value={this.state.linkTitle}
            onChangeText={linkTitle => this.updateLinkTitle(linkTitle)}
          />
          <div className="btn" onClick={this.addLink.bind(this)}> Add new link </div>
        </div>

        <div><Link title={this.state.title} link={this.state.link} /> </div>

      </div >
    );
  }
}

export default App;
