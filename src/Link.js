import React, { Component } from 'react';


class Link extends Component {
  render() {
    return (
      <div className="cardLink">
        <div className="webTitle">
          <p> {this.props.title}</p>
        </div>
        <div className="webLink">
          <p> {this.props.link} </p>
        </div>
      </div>
    );
  }
}

export default Link;