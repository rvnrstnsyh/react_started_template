import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      sum: props.startingFrom,
      unit: "sec",
    };

    this.powerToggle = this.powerToggle.bind(this);
  }

  increase() {
    this.setState((state, props) => ({
      sum: `${parseInt(state.sum) + 1} ${state.unit}`,
      unit: "secs",
    }));
  }

  powerToggle() {
    this.setState((state) => ({
      power: !state.power,
    }));

    this.interval = setInterval(() => this.increase(), 1000);
  }

  render() {
    return (
      <div className="counter">
        {this.state.power ? (
          <p>{this.state.sum}</p>
        ) : (
          <button className="button" onClick={this.powerToggle}>
            Start counting
          </button>
        )}
      </div>
    );
  }
}
