import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppWrapper } from './App.style';
import { SEARCH_PATH } from '../../config';


function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path={`/${SEARCH_PATH}/:subreddit`}>
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppWrapper>
  );
}

export default App;
