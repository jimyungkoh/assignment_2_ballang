const PRODUCTS_API = process.env.REACT_APP_PRODUCTS_API;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getProducts = async () => {
  const response = await fetch(PRODUCTS_API, options);
  const products = await response.json();

  return products;
};

const getProduct = async (productId) => {
  const response = await fetch(`${PRODUCTS_API}/${productId}`, options);

  const product = await response.json();

  return product;
};

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
