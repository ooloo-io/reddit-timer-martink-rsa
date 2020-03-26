import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Header from '../Header/Header';
import Logo from '../../assets/images/logo.svg';


function App() {
  const headerObj = {
    logo: Logo,
    links: [
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
    ],
  };

  return (
    <div>
      <Router>
        <Header logo={headerObj.logo} links={headerObj.links} />
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
