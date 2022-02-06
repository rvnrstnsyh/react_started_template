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
        <h3>About</h3>
        <br />
        <h2>{this.state.title}</h2>
        <p className="description">restructured MVC base folder, react router, redux and thunk</p>
      </div>
    );
  }
}
