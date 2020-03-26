import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Header from '../Header/Header';
import Logo from '../../assets/images/logo.svg';


function App() {
  const headerLinks = [
    {
      title: 'Search',
      link: '/search?title="javascript"',
    },
    {
      title: 'How it works',
      link: '/#how-it-works',
    },
    {
      title: 'About',
      link: '/#about',
    },
  ];

  return (
    <div>
      <Router>
        <Header logo={Logo} links={headerLinks} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
