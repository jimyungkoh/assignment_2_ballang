import React, { useEffect, useState } from "react";
import api from "../../api/api";
import styled from "styled-components";
import ProductsList from "../../components/ProductsList";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products.getProducts().then(setProducts);
  }, []);

  return (
    <StyledHomePage>
      <ProductsList products={products} />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.main`
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
