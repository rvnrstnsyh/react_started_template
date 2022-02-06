import { Component, Fragment } from "react";
import logo from "../assets/img/redux512.png";
import Navigation from "../components/_Global/Navigation";

// ? Components
import ListUsers from "../components/_Global/ListUsers";

export default class Redux extends Component {
  render() {
    return (
      <Fragment>
        <Navigation routeName="redux" />

        <div className="container">
          <header className="header">
            <img src={logo} className="redux_logo" alt="logo" />
            <ListUsers />
          </header>
        </div>
      </Fragment>
    );
  }
}
