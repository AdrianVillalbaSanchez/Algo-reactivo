import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="cardBrand">
          <p> {this.props.brand}</p>
        </div>
        <div className="cardModel">
          <p> {this.props.model} </p>
        </div>
        <div className="cardYear">
          <p> {this.props.year} </p>
        </div>
      </div>
    );
  }
}

export default Card;