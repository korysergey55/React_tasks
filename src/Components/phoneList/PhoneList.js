import React, { Component } from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";
import { connect } from "react-redux";
import { setPhones } from "../../redux/products/productsActions";

import { addToCart } from "../../redux/cart/cartActions";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";

class PhoneList extends Component {
  componentDidMount() {
    this.props.getAllAdvByCategoryOperation("phones");
  }

  render() {
    return (
      <PhoneListContainer>
        {this.props.phones.map((phone) => (
          <PhoneListItem
            phone={phone}
            key={phone.id}
            addToCart={this.props.addToCart}
          />
        ))}
      </PhoneListContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phones: state.products.items.phones,
  };
};

const mapDispatchToProps = { addToCart, getAllAdvByCategoryOperation };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
