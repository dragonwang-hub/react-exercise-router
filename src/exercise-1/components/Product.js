import React, { Fragment, Component } from 'react';
import data from '../../exercise-2/mockups/data.json'

class Product extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
    const productsJson = JSON.stringify(data);
    console.log(productsJson);
    const index = this.props.match.params.id;
    const productDetails = Object.values(data).filter(product => product.id === Number(index));
    console.log(productDetails);
  }
  render() {
    const index = this.props.match.params.id;
    const productDetails = Object.values(data).filter(product => product.id === Number(index))[0];
    return (
      <Fragment>
        <h1>Products Details</h1>
        {
          Object.keys(productDetails).map(key => <p key={key}>{key}:{productDetails[key]}</p>)
        }
        <p>URL:/products/{productDetails.id}</p>

      </Fragment>
    );
  }
}

export default Product;