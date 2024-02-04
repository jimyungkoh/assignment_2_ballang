import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartList from "../../components/CartList";
import styled from "styled-components";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    cartItems && (
      <CartPageWrapper>
        <CartList cartItems={cartItems}></CartList>
      </CartPageWrapper>
    )
  );
}

const CartPageWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;
