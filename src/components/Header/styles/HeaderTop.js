import styled from "styled-components";

const HeaderTop = styled.div.withConfig({
  shouldForwardProp: (prop) => !["signedIn"].includes(prop),
})`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  padding: 0.5rem 5%;
  height: 30%;
  color: white;
  font-size: 0.8rem;
  background-color: black;
  display: grid;
  align-items: center;
  grid-template-columns: 350px auto 350px;
  justify-content: space-between;

  @media (max-width: 992px) {
    grid-template-columns: ${(props) =>
      props.signedIn ? "repeat(3, max-content)" : "140px auto 140px"};
    justify-content: ${(props) =>
      props.signedIn ? "space-around" : "space-between"};
  }

  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  button {
    font-weight: normal;
  }
`;

export default HeaderTop;
