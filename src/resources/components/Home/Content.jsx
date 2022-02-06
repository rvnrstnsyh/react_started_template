import { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    return (
      <div className="content">
        <h1 className="email">re@rvnrstnsyh.dev</h1>
        <br />
        <h3>Home</h3>
        <br />
        <h2>{this.state.title}</h2>
        <p className="description">
          replace or delete the "src" folder with a{" "}
          <a href="https://github.com/rvnrstnsyh/rvnrstnsyh.dev.git" target="_blank" rel="noreferrer" className="link">
            new
          </a>{" "}
          one
        </p>
      </div>
    );
  }
}
