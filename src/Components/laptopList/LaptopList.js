import React, { Component } from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";
import { connect } from "react-redux";

import { addToCart } from "../../redux/cart/cartActions";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";

class LaptopList extends Component {
  componentDidMount() {
    this.props.getAllAdvByCategoryOperation("laptops");
  }

  render() {
    return (
      <LaptopListContainer>
        {this.props.laptops.map((laptop) => (
          <LaptopListItem
            laptop={laptop}
            key={laptop.id}
            addToCart={this.props.addToCart}
          />
        ))}
      </LaptopListContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    laptops: state.products.items.laptops,
  };
};

const mapDispatchToProps = { addToCart, getAllAdvByCategoryOperation };

export default connect(mapStateToProps, mapDispatchToProps)(LaptopList);
