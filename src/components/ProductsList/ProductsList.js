import React from "react";
import styled from "styled-components";
import ProductsListItem from "../ProductsListItem";

export default function ProductsList({ products }) {
  return (
    <StyledProductsList>
      {products.map((product) => (
        <ProductsListItem key={product.goodsno} product={product} />
      ))}
    </StyledProductsList>
  );
}

const StyledProductsList = styled.section`
  display: grid;
  padding: 5%;
  row-gap: 5%;
  justify-content: center;

  @media (max-width: 992px) {
    & {
      column-gap: 10%;
      grid-template-columns: repeat(2, 40%);
    }
  }

  @media (min-width: 993px) {
    & {
      column-gap: 2%;
      grid-template-columns: repeat(4, 23%);
    }
  }
`;
