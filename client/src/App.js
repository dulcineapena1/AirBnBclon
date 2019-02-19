import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid">
       
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
