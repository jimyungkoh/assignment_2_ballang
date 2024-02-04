import styled from "styled-components";

const StyledProductsListItemCaption = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    column-gap: 0.5rem;

    li:nth-child(2) {
      color: #bd081c;
    }
  }
`;

export default StyledProductsListItemCaption;
