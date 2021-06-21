import React, { Component } from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";
import { connect } from "react-redux";
import { setLaptops } from "../../redux/products/productsActions";
import { addToCart } from "../../redux/cart/cartActions";
import { getAllAdvByCategory } from "../../services/api";

class LaptopList extends Component {
  componentDidMount() {
    this.getLaptops();
  }
  getLaptops = async () => {
    const response = await getAllAdvByCategory("laptops");
    if (response) {
      const laptops = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
      this.props.setLaptops(laptops);
    }
  };

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

const mapDispatchToProps = { addToCart, setLaptops };

export default connect(mapStateToProps, mapDispatchToProps)(LaptopList);
