import React from "react";
import styled from "styled-components";
import CartListItem from "../CartListItem";

export default function CartList({ cartItems }) {
  return (
    <StyledCartList>
      {cartItems.map((item) => (
        <CartListItem
          key={item.productId}
          productId={item.id}
          quantity={item.quantity}
          size={item.size}
        />
      ))}
    </StyledCartList>
  );
}

const StyledCartList = styled.section`
  padding: 2rem;
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
`;
