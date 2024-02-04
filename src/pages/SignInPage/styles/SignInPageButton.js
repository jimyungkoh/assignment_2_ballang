import styled from "styled-components";

const SignInPageButton = styled.button`
  width: 100%;
  font-size: 24px;
  font-weight: normal;
  height: 52px;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.disabled ? "#999" : "white")};
  background-color: ${(props) => (props.disabled ? "#f6f6f6" : "black")};
`;

export default SignInPageButton;
