import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import convertToKRW from "../../utils/convertToKRW";

export default function CartListItem({ productId, quantity, size }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.products.getProduct(productId).then(setProduct);
  }, [productId, quantity, size]);

  return (
    product && (
      <StyledCartListItem>
        <StyledCartItemImageBox>
          <img
            src={product.img_i}
            style={{ height: "100%" }}
            alt={product.goodsno}
          />
        </StyledCartItemImageBox>
        <StyledContentBox>
          <p>{product.brandnm}</p>
          <p
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <strong>{product.origin}</strong>
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{`수량 ${quantity}개 | ${size}`} </span>
            <span style={{ color: "#999", textDecoration: "line-through" }}>
              {convertToKRW(product.consumer)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <button
              style={{
                color: "black",
                border: "1px solid #999",
                padding: "7px 5px",
                borderRadius: "2px",
              }}
            >
              옵션/수량
            </button>
            <span>{convertToKRW(product.member_price)}</span>
          </div>
        </StyledContentBox>
      </StyledCartListItem>
    )
  );
}

const StyledCartListItem = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 200px;
  justify-items: center;
`;

const StyledCartItemImageBox = styled.div`
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 0.5rem;

  p {
    margin: 0;
  }
`;
