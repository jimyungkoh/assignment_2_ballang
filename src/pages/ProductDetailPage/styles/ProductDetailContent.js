import styled from "styled-components";

const ProductDetailContent = styled.section`
  display: flex;
  flex-direction: column;

  hr {
    margin-bottom: 1rem;
  }

  div:nth-child(2) {
    padding-left: 5px;
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    row-gap: 1rem;
    column-gap: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export default ProductDetailContent;
