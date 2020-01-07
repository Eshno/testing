import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./containers/Home";
import Todo from "./containers/Todo";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={Todo} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
