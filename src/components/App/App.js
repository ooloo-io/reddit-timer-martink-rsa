import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/search" exact component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
