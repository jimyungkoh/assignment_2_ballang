import styled from "styled-components";

const ProductDetailBox = styled.article`
  object-fit: contain;

  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: repeat(2, 47%);
  grid-template-rows: 80%;

  @media (max-width: 992px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 60%;
  }
`;

export default ProductDetailBox;
