import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Sort from "./Sort";
import Tree from "./Tree";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sort">Sort</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sort">
            <Sort />
          </Route>
          <Route>
            <Tree />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
