import React from "react";
import _ from "lodash";

const snapshots = [];
export const snapshot = (array) => snapshots.push(Array.from(array));
export const range = (length) =>
  Array.apply(null, { length }).map(Number.call, Number);
let isDone = false;
let reducedSnapshots = [];
export const done = () => {
  reducedSnapshots = snapshots.reduce((accumulator, current) => {
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
  // ReactDOM.render(
  //   <App snapshots={reduced} count={snapshots.length} />,
  //   document.getElementById("target")
  // );
  isDone = true;
  // return snapshots.length;
};

export class App extends React.Component {
  render() {
    if (!isDone) return <h1>You must call `done()` for this to render</h1>;

    const max = _.max(reducedSnapshots[0]);
    const min = _.min(reducedSnapshots[0]);

    return (
      <div>
        <h1>Comparisons: {snapshots.count}</h1>
        <table>
          <tbody>
            {reducedSnapshots.map((snapshot, index) => (
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
