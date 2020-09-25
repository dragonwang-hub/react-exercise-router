import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../exercise-2/mockups/data.json';


class Products extends Component {
  state = {
    products: {},
  };

  componentDidMount() {
    this.setState({
      products: data,
    });
  };

  render() {
    return (
      <div>
        <h1>All Products:</h1>
        <div className="product_keyname">
          {
            Object.keys(this.state.products).map((productName, index) =>
              <div key={index}>
                <Link to={`/products/${data[productName].id}`}
                >
                  {productName}
                </Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Products;