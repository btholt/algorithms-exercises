import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubbleSort from "./bubble-sort";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/bubble-sort">
          <BubbleSort />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
