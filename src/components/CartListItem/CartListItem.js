import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import convertToKRW from "../../utils/convertToKRW";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../store/reducers/cart.reducer";
import { useDispatch } from "react-redux";

export default function CartListItem({ productId, quantity, size }) {
  const [product, setProduct] = useState(null);
  const { signedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    api.products.getProduct(productId).then(setProduct);
  }, [productId, quantity, size]);

  if (!signedIn) navigate("/sign-in");

  const handleClickRemoveItem = (e) => {
    e.stopPropagation();

    const productId = product.goodsno;
    const size = product.option[0].size;
    dispatch(removeItem({ productId, size }));
  };

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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* onClick={removeItem} */}
            <StyledDeleteButton onClick={handleClickRemoveItem}>
              ✕
            </StyledDeleteButton>
          </div>
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
  width: 100%;
  justify-content: flex-start;
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

const StyledDeleteButton = styled.button`
  color: black;
  font-size: 1.3rem;
`;
