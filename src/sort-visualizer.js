import React from "react";
import _ from "lodash";

export function clear() {
  isDone = false;
  reducedSnapshots = [];
  snapshots = [];
}

let snapshots = [];
export const snapshot = (array) => snapshots.push(Array.from(array));
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
  isDone = true;
};

export class App extends React.Component {
  render() {
    if (!isDone) return <h1>You must call `done()` for this to render</h1>;

    const max = _.max(reducedSnapshots[0]);
    const min = _.min(reducedSnapshots[0]);

    return (
      <div>
        <h1>Snapshots: {snapshots.length}</h1>
        <h1>Unique Snapshots: {reducedSnapshots.length}</h1>
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
