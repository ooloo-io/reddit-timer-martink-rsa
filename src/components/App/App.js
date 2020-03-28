import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppWrapper from './App.style';

function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppWrapper>
  );
}

export default App;
