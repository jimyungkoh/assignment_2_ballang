import styled from "styled-components";

const SignInPageForm = styled.form`
  background-color: white;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
  margin: 0 auto;

  input {
    font-size: 1.2rem;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid #dedede;
  }

  input:focus {
    border-color: none;
  }
`;

export default SignInPageForm;
