import styled from "styled-components";
const ProductsListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  object-fit: contain;

  img {
    width: 100%;
    cursor: pointer;
    border-radius: 3px;
  }

  img:hover {
    transform: scale(1.07);
    transition-duration: 0.7s;
  }
`;
export default ProductsListItem;
