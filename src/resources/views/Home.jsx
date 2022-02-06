import { Component, Fragment } from "react";
import logo from "../assets/img/react512.png";

// ? Components
import Content from "../components/Home/Content";
import Counter from "../components/_Global/Counter";
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
            <Counter startingFrom="0 sec" views="home" />
          </header>
        </div>
      </Fragment>
    );
  }
}
