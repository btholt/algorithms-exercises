import ReactDOM from "react-dom";
import React from "react";

const snapshots = [];
const snapshot = (array) => snapshots.push(Array.from(array));
const range = (length) =>
  Array.apply(null, { length }).map(Number.call, Number);
const done = () => {
  let reduced = snapshots.reduce((accumulator, current) => {
    let shouldAdd = false;
    if (accumulator.length) {
      let prev = accumulator[accumulator.length - 1];
      for (let i = 0; i < current.length; i++) {
        if (current[i] !== prev[i]) {
          shouldAdd = true;
          break;
        }
      }
    } else {
      shouldAdd = true;
    }
    if (shouldAdd) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  ReactDOM.render(
    <App snapshots={reduced} count={snapshots.length} />,
    document.getElementById("target")
  );
  return snapshots.length;
};

class App extends React.Component {
  render() {
    const max = Math.max.apply(Math, this.props.snapshots[0]);
    const min = Math.min.apply(Math, this.props.snapshots[0]);
    return (
      <div>
        <h1>Comparisons: {this.props.count}</h1>
        <table>
          <tbody>
            {this.props.snapshots.map((snapshot, index) => (
              <Snapshot max={max} min={min} key={index} data={snapshot} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class Snapshot extends React.Component {
  getColor(input) {
    const max = this.props.max - this.props.min;
    const value = input - this.props.min;

    const spectrum = value / max;
    const red =
      spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 255) : 0;
    const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 255) : 0;
    const green = blue > 0 ? 255 - blue : 255 - red;

    return `rgb(${red},${green},${blue})`;
  }
  render() {
    return (
      <tr className="row">
        {this.props.data.map((num) => (
          <td key={num} style={{ backgroundColor: this.getColor(num) }}>
            {num}
          </td>
        ))}
      </tr>
    );
  }
}

export default snapshot;
