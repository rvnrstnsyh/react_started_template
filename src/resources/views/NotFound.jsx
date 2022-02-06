import { Component, Fragment } from "react";
import logo from "../assets/img/react512.png";

// ? Components
import Content from "../components/NotFound/Content";
import Navigation from "../components/_Global/Navigation";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navigation routeName="react" />

        <div className="container">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <Content title="React Refactored" />
          </header>
        </div>
      </Fragment>
    );
  }
}
