import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { AiFillShopping } from "react-icons/ai";
import CartButton from "../CartButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/reducers/cart.reducer";
import { successAlert } from "../Alert";
import convertToKRW from "../../utils/convertToKRW";
import { useAuth } from "../../contexts/auth.context";

export default function ProductsListItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signedIn } = useAuth();
  const handleClickAddItem = (e) => {
    e.stopPropagation();

    if (!signedIn) {
      navigate("/sign-in");
      return;
    }

    const productId = product.goodsno;
    const size = product.option[0].size;
    dispatch(addItem(productId, size));
    successAlert("장바구니에 상품이 담겼습니다.");
  };

  const navigateToProductDetail = () =>
    navigate(`/product-detail/${product.goodsno}`);

  return (
    <S.ProductsListItem>
      <img
        src={product.img_i}
        alt={product.origin}
        onClick={navigateToProductDetail}
      />
      <p>{product.brandnm}</p>
      <p>{product.origin}</p>
      <S.ProductsListItemCaption>
        <ul>
          <li>{convertToKRW(product.price)}</li>
          <li>{product.sale_percent}%</li>
        </ul>
        <CartButton onClick={handleClickAddItem}>
          <AiFillShopping />
        </CartButton>
      </S.ProductsListItemCaption>
    </S.ProductsListItem>
  );
}
