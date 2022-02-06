import { Component, Fragment } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    return (
      <Fragment>
        <h1 className="email">re@rvnrstnsyh.dev</h1>
        <br />
        <h3>404 Not Found :(</h3>
      </Fragment>
    );
  }
}
