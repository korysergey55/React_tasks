import { createSelector } from "@reduxjs/toolkit";
export const getPhonesSelector = (state) => state.products.items.phones;

export const getLaptopsSelector = (state) => state.products.items.laptops;

export const getLoaderSelector = (state) => state.products.loader;

export const filterSelector = (state) => state.products.filter;

export const getProductsSelector = (state, category) =>
 state.products.items[category];

export const getfilteredProductSelector = createSelector(
 [getProductsSelector, filterSelector],
 (products, filter) =>
  products.filter((product) =>
   product.name.toLowerCase().includes(filter.toLowerCase())
  )
);
