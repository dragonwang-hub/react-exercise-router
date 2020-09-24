import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Profile from './Profile';
import Products from './Products';
import Product from './Product';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Router>
          <nav className="navbar navbar-dark bg-primary bg-light">
            <Link to="/" className="nav-link" id="nav-first">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/my-profile" className="nav-link">
              My Profile
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
             </Link>
          </nav>
          <Switch>
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/goods" component={Products} />
            <Route exact path="/my-profile" component={Profile} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
