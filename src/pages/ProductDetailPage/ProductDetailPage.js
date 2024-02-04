import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../api/api";
import convertToKRW from "../../utils/convertToKRW";
import * as S from "./styles";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.products.getProduct(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  return (
    product && (
      <S.ProductDetailWrapper>
        <S.ProductDetailBox>
          <S.ProductDetailImage>
            <img src={product.img_i} alt={productId} />
          </S.ProductDetailImage>
          <S.ProductDetailContent>
            <div>
              <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {product.brandnm}
              </p>

              <p>{`${product.goodsnm} | 발랑코드[${productId}]`}</p>
              <hr />
            </div>
            <div>
              <span>상품 금액</span>
              <span>{convertToKRW(product.consumer)}</span>
              <span>판매가</span>
              <span>{convertToKRW(product.price)}</span>
              <span>최대 혜택가</span>
              <span>
                {convertToKRW(product.member_price)}
                <span
                  style={{ color: "#bd081c" }}
                >{` ${product.sale_percent}%`}</span>
              </span>
            </div>
            <div>
              <hr />
            </div>
            <div>
              <p>옵션 선택</p>
              <S.ProductDetailSelect name="size" defaultValue="">
                <option disabled value="">
                  옵션
                </option>
                {product.option.map((o) => (
                  <option key={o.size} value={o.size}>
                    {o.size}
                  </option>
                ))}
              </S.ProductDetailSelect>
            </div>
          </S.ProductDetailContent>
        </S.ProductDetailBox>
      </S.ProductDetailWrapper>
    )
  );
}

// const StyledProductDetailWrapper = styled.main`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.5;
// `;

// const StyledProductDetailBox = styled.article`
//   object-fit: contain;

//   display: grid;
//   justify-content: space-between;
//   align-items: flex-start;
//   grid-template-columns: repeat(2, 47%);
//   grid-template-rows: 80%;

//   @media (max-width: 992px) {
//     width: 90%;
//   }

//   @media (min-width: 993px) {
//     width: 60%;
//   }
// `;

// const StyledProductDetailImage = styled.section`
//   img {
//     width: 100%;
//   }
// `;

// const StyledProductDetailContent = styled.section`
//   display: flex;
//   flex-direction: column;

//   hr {
//     margin-bottom: 1rem;
//   }

//   div:nth-child(2) {
//     padding-left: 5px;
//     display: grid;
//     grid-template-columns: 1.5fr 3fr;
//     row-gap: 1rem;
//     column-gap: 1rem;
//     font-weight: bold;
//     font-size: 1.2rem;
//   }
// `;

// const StyledProductDetailSizeBox = styled.select`
//   width: 100%;
//   height: 3rem;
//   padding-left: 10px;
//   border: 1px solid #dedede;
//   background-color: white;
// `;
