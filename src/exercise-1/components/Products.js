import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import Product from './Product';


class Products extends Component {
  render() {
    return (
      <Fragment>
        <h1>All Products:</h1>
        <a href="/products/1">Bicycle</a><br />
        <a href="/products/2">TV</a><br />
        <a href="/products/3">Pencil</a><br />
        <Route exact path="/products/:id" component={Product} />
      </Fragment>
    );
  }
}

export default Products;