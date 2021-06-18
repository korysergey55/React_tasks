import axios from "axios";

const baseURL = "https://reactmaps-1556023014107-default-rtdb.firebaseio.com/";

export const createNewAdv = async (category, newAdv) => {
  try {
    const response = await axios.post(
      baseURL + `advertisements/${category}.json`,
      newAdv
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getProductByID = async (category, id) => {
  console.log("id :>> ", id);
  try {
    const response = await axios.get(
      baseURL + `advertisements/${category}/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdv = async (category, id) => {
  try {
    await axios.delete(baseURL + `advertisements/${category}/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};

export const createNewOrder = async (order) => {
  try {
    await axios.post(baseURL + "orders.json", order);
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdvByCategory = async (category) => {
  try {
    const response = await axios.get(
      baseURL + `advertisements/${category}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
