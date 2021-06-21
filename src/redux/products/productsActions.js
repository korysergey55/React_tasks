const SETPHONES = "getPhones";
const SETLAPTOPS = "getLaptops";
const ADDPRODUCT = "addProduct";
const SETLOADER = "setLoader";
const SETERROR = "setError";
const RESETERROR = "resetError";

export { ADDPRODUCT, SETERROR, SETLOADER, RESETERROR, SETPHONES, SETLAPTOPS };

const addProduct = (product) => ({
  type: ADDPRODUCT,
  payload: product,
});
const setLoader = () => ({ type: SETLOADER });
const setError = (error) => ({ type: SETERROR, payload: error });
const resetError = () => ({ type: RESETERROR });
const setPhones = (phones) => ({ type: SETPHONES, payload: phones });
const setLaptops = (laptops) => ({ type: SETLAPTOPS, payload: laptops });

export { addProduct, setError, resetError, setLoader, setPhones, setLaptops };
