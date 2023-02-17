import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Hero from './components/Hero';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/profile" component={Profile} />
          <Route path="/footer" component={Footer} />
          <Route path="/hero" component={Hero} />
        </Switch>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;
