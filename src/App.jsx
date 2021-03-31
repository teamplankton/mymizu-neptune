import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route as Rt,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";
import Route from "./components/Route";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Rt exact path="/">
            <Redirect to="/main" />
          </Rt>
          <Rt path="/main" component={Main} />
          <Rt path="/route" component={Route} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
