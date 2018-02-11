import React from "react";

const WithMouse = Component => {
  return class extends React.Component {
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
          style={{
            width: 200,
            height: 200,
            backgroundColor: "skyblue",
            textAlign: "center",
            paddingTop: 40,
          }}
          onMouseMove={this.handleMouseOver}
        >
          <Component {...this.state} />
        </div>
      );
    }
  };
};

class App extends React.Component {
  render() {
    const { x, y } = this.props;
    return <span>{`position is (${x}, ${y})`}</span>;
  }
}

class App2 extends React.Component {
  render() {
    const { x, y } = this.props;
    return <p>{`position2 is ${x}, ${y}`}</p>;
  }
}

const AppWithMouse = WithMouse(App);
const App2WithMouse = WithMouse(App2);

export default () => (
  <div>
    <AppWithMouse />
    <App2WithMouse />
  </div>
);
