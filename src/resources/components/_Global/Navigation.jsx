import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: props.routeName + "_navigation",
    };
  }

  render() {
    return (
      <nav className={this.state.navClass}>
        <h6>
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            <NavLink to="/about">About</NavLink>
          </span>
          <span>
            <NavLink to="/redux">Redux</NavLink>
          </span>
        </h6>
      </nav>
    );
  }
}
