import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Header from '../Header/Header';
import Logo1 from '../../assets/images/logo.svg';
import Logo2 from '../../assets/images/sign.svg';
import Footer from '../Footer/Footer';
import AppWrapper from './App.style';


function App() {
  const headerObj = {
    logo: Logo1,
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
  const footerObj = {
    logo: Logo2,
    links: [
      {
        title: 'ooloo.io',
        link: 'https://www.ooloo.io/',
      },
      {
        title: 'Terms & Privacy',
        link: '/terms',
      },
    ],
  };

  return (
    <AppWrapper>
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
        <Footer logo={footerObj.logo} links={footerObj.links} />
      </Router>
    </AppWrapper>
  );
}

export default App;
