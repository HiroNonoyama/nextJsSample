import React, { Component } from "react";

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseOver = e => {
    const { clientX, clientY } = e;
    this.setState({ x: clientX, y: clientY });
  };

  render() {
    return (
      <div
        onMouseMove={this.handleMouseOver}
        style={{ height: 300, width: 300, backgroundColor: "yellow" }}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default () => (
  <div>
    <Mouse render={({ x, y }) => <span>{`position is ${x}, ${y}`}</span>} />
  </div>
);
