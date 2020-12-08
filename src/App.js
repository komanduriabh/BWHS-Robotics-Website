import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import AboutUs from './views/AboutUs'
import Teams from './views/Teams'
import Coaches from './views/Coaches'
import Sponsors from './views/Sponsors'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/aboutus" component={AboutUs} layout={LayoutDefault} />
          <AppRoute exact path="/teams" component={Teams} layout={LayoutDefault} />
          <AppRoute exact path="/coaches" component={Coaches} layout={LayoutDefault} />
          <AppRoute exact path="/sponsors" component={Sponsors} layout={LayoutDefault} />
        </Switch>
        
      )} />
      </div>

  );
}

export default App;