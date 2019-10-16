import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        {this.props.user.name}
      </div>
    );
  }
}

export default Card;
