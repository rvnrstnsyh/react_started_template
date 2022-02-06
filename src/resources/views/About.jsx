import { Component, Fragment } from "react";
import logo from "../assets/img/react512.png";

// ? Components
import Content from "../components/About/Content";
import Counter from "../components/_Global/Counter";
import Navigation from "../components/_Global/Navigation";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Navigation routeName="react" />

        <div className="container">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <Content title="Started Template" />
            <Counter startingFrom="0 sec" />
          </header>
        </div>
      </Fragment>
    );
  }
}
