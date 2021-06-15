import React, { Component } from "react";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { createNewOrder, getAllAdvByCategory } from "../../services/api";

class Main extends Component {
  state = {
    cart: [],
    phones: [],
    laptops: [],
    error: "К сожалению товары по данной категории отсутствуют",
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
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </MainContainer>
    );
  }
}

export default Main;
