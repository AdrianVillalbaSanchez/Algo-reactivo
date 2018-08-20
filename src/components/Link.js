import React, { Component } from 'react';


class Link extends Component {
  render() {
    return (
      <div className="cardLink">
        <div className="webTitle">
          <p> {this.props.title}</p>
        </div>
        <div className="webDesc">
          <p> Description asdfsadfsadfsadfsadf </p>
        </div>
        <div className="removeBtn" onClick={this.props.deleteMethod}> Remove </div>
      </div>

    );
  }
}

export default Link;