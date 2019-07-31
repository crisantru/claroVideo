import React, { Component } from "react";

class Portrait extends Component {
  render() {
    return (
      <img
        className="imgPortrait"
        id={this.props.obj.id}
        src={this.props.obj.image_large}
        alt={this.props.obj.title_uri}
      />
    );
  }
}

export default Portrait;
