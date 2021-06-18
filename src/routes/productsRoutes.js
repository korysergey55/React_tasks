import { lazy } from "react";

export const productsRoutes = [
  {
    name: "ProductDetails",
    path: "/:category/:productID",
    component: lazy(() => import("../pages/ProductItemDetails")),
    exact: false,
    isLink: false,
  },
  {
    name: "Phones",
    path: "/phones",
    component: lazy(() => import("../Components/phoneList/PhoneList")),
    exact: true,
    isLink: true,
  },
  {
    name: "Laptops",
    path: "/laptops",
    component: lazy(() => import("../Components/laptopList/LaptopList")),
    exact: true,
    isLink: true,
  },
];
