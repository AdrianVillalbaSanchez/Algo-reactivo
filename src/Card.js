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
        <div className="cardArrow">
          <img src="cardArrow.png" />
        </div>
      </div>
    );
  }
}

export default Card;