import React, { Component } from "react";
import { getAllAdvByCategory } from "../../services/api";

import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";

class PhoneList extends Component {
  // state = {
  //   phones: [],
  //   error: "К сожалению товары по данной категории отстутствуют",
  // };

  // async componentDidMount() {
  //   const response = await getAllAdvByCategory("phones");
  //   if (response) {
  //     const phones = Object.keys(response).map((key) => ({
  //       id: key,
  //       ...response[key],
  //     }));
  //     this.setState({ phones });
  //   }
  // }
  render() {
    // const { phones, error } = this.state;
    return (
      <PhoneListContainer>
        {!!this.props.phones.length ? (
          this.props.phones.map((phone) => (
            <PhoneListItem
              phone={phone}
              key={phone.id}
              addToCart={this.props.addToCart}
            />
          ))
        ) : (
          <p className='errorTitle'>{this.props.error}</p>
        )}
      </PhoneListContainer>
    );
  }
}

export default PhoneList;
