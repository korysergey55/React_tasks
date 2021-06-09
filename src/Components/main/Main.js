import React, { Component } from "react";
import data from "../../data";
import CartList from "../cart/CartList";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

class Main extends Component {
  state = {
    cart: [],
  };
  addToCart = (product) =>
    this.setState((prev) => ({ cart: [...prev.cart, product] }));
  removeFromCart = (id) =>
    this.setState((prev) => ({
      cart: [...prev.cart.filter((product) => product.id !== id)],
    }));
  removeAllFromCart = () => this.setState({ cart: [] });
  render() {
    return (
      <main>
        <Section title='Корзина'>
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title='Мобильные телефоны'>
          <PhoneList phones={data.phones} addToCart={this.addToCart} />
        </Section>
        {/* <Section title='Ноутбуки'>
        <LaptopList laptops={data.laptops} />
      </Section> */}
      </main>
    );
  }
}

export default Main;
