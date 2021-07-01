import { createAction } from "@reduxjs/toolkit";

const setLoader = createAction("@products/setLoader");
const setError = createAction("@products/setError");
const resetError = createAction("@products/resetError");
const setPhones = createAction("@products/getPhones");
const setLaptops = createAction("@products/getLaptops");

export { setError, resetError, setLoader, setPhones, setLaptops };
// ===================== redux =============================
