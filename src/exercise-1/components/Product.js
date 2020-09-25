import React, { Fragment, Component } from 'react';
import data from '../../exercise-2/mockups/data.json'

class Product extends Component {
  state = {
    product: {},
  };
  componentDidMount() {
    const index = this.props.match.params.id;
    const productDetails = Object.values(data).find(product => product.id === Number(index));
    this.setState({
      product: productDetails,
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Products Details</h1>
        {
          Object.keys(this.state.product).map(key => <p key={key}>{key}:{this.state.product[key]}</p>)
        }
        <p>URL:/products/{this.state.product.id}</p>
      </Fragment>
    );
  }
}

export default Product;