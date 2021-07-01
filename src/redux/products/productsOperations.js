import axios from "axios";
import { getAllAdvByCategory } from "../../services/api";
import { setError, setLaptops, setLoader, setPhones } from "./productsActions";

const getAction = (category, products, dispatch) => {
  if (category === "phones") {
    dispatch(setPhones(products));
  }
  if (category === "laptops") {
    dispatch(setLaptops(products));
  }
};

export const getAllAdvByCategoryOperation = (category) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await getAllAdvByCategory(category);

    if (response) {
      const products = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
      return getAction(category, products, dispatch);
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

