import { Component } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// ? Views
import Home from "./resources/views/Home";
import About from "./resources/views/About";
import Redux from "./resources/views/Redux";
import NotFound from "./resources/views/NotFound";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/redux" exact element={<Redux />} />
          <Route path="/*" exact element={<NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
