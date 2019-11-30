import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Views from './views';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <h3>Login</h3>
      </Route>
      <PrivateRoute path="/">
        <Views />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default App;
