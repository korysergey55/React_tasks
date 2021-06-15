import React, { Component } from "react";
import { getAllAdvByCategory } from "../../services/api";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";

class LaptopList extends Component {
  state = {
    // laptops: [],
    // error: "К сожалению товары по данной категории отстутствуют",
  };

  // async componentDidMount() {
  //   const response = await getAllAdvByCategory("laptops");
  //   if (response) {
  //     const laptops = Object.keys(response).map((key) => ({
  //       id: key,
  //       ...response[key],
  //     }));
  //     this.setState({ laptops });
  //   }
  // }
  render() {
    // const { laptops, error } = this.state;
    return (
      <LaptopListContainer>
        {!!this.props.laptops.length ? (
          this.props.laptops.map((laptop) => (
            <LaptopListItem
              laptop={laptop}
              key={laptop.id}
              addToCart={this.props.addToCart}
            />
          ))
        ) : (
          <p className='errorTitle'>{this.props.error}</p>
        )}
      </LaptopListContainer>
    );
  }
}

export default LaptopList;
