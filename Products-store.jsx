/*import { createContext, useReducer } from "react";

export const ProductsList = createContext({
  products: [],
  addInitialProduct: () => {},
});

const productsReducer = (currProduct, action) => {
  let newProduct = currProduct;
  if (action.type === "PRODUCT") {
    newProduct = action.payload.products;
  }
  return newProduct;
};

const ProductsProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productsReducer, []);

  const addInitialProduct = (products) => {
    dispatchProducts({
      type: "PRODUCT",
      payload: {
        products,
      },
    });
  };

  return (
    <ProductsList.Provider value={{ products, addInitialProduct }}>
      {children}
    </ProductsList.Provider>
  );
};

export default ProductsProvider;
*/
