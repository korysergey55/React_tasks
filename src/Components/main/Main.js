import React, { Component } from "react";
import { createNewOrder, getAllAdvByCategory } from "../../services/api";
import AdvForm from "../admin/AdvForm";
import CartList from "../cart/CartList";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";

class Main extends Component {
  state = {
    cart: [],
    phones: [],
    laptops: [],
    error: "К сожалению товары по данной категории отстутствуют",
  };

  async componentDidMount() {
    this.getPhones();
    this.getLaptops();
  }

  getPhones = async () => {
    const response = await getAllAdvByCategory("phones");
    if (response) {
      const phones = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
      this.setState({ phones });
    }
  };


  getLaptops = async () => {
    const response = await getAllAdvByCategory("laptops");
    if (response) {
      const laptops = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
      this.setState({ laptops });
    }
  };

  addNewAdv = (category, product) => {
    this.setState((prevState) => ({
      [category]: [...prevState[category], product],
    }));
  };

  addToCart = (product) =>
    this.setState((prev) => ({ cart: [...prev.cart, product] }));

  removeFromCart = (id) =>
    this.setState((prev) => ({
      cart: [...prev.cart.filter((product) => product.id !== id)],
    }));

  createOrder = () => {
    createNewOrder(this.state.cart);
    this.removeAllFromCart();
  };

  removeAllFromCart = () => this.setState({ cart: [] });

  render() {
    return (
      <MainContainer>
        <Section title='Добавление нового объявления'>
          <AdvForm addNewAdv={this.addNewAdv} />
        </Section>
        <Section title='Корзина'>
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            createOrder={this.createOrder}
          />
        </Section>
        <Section title='Мобильные телефоны'>
          <PhoneList
            phones={this.state.phones}
            addToCart={this.addToCart}
            error={this.state.error}
          />
        </Section>
        <Section title='Ноутбуки'>
          <LaptopList
            laptops={this.state.laptops}
            addToCart={this.addToCart}
            error={this.state.error}
          />
        </Section>
      </MainContainer>
    );
  }
}

export default Main;
