import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { failedAlert } from "../../components/Alert";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../store/reducers/user.reducer";

function SignInPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [validForm, setValidForm] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    signIn();
    dispatch(toggleLogin());
  };

  useEffect(() => {
    const checkFormValidity = () => {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      setValidForm(username && password);
    };

    const usernameInput = usernameRef.current;
    const passwordInput = passwordRef.current;

    usernameInput.addEventListener("input", checkFormValidity);
    passwordInput.addEventListener("input", checkFormValidity);

    return () => {
      usernameInput.removeEventListener("input", checkFormValidity);
      passwordInput.removeEventListener("input", checkFormValidity);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      return alert("아이디 또는 비밀번호를 입력해 주세요!");
    }

    if (username === "udemy" && password === "udemy") {
      handleSignIn();
      navigate("/");
    } else {
      failedAlert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <S.SignInPageWrapper>
      <S.SignInPageForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디를 입력해주세요."
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="패스워드를 입력해주세요."
          ref={passwordRef}
        />
        <S.SignInPageButton type="submit" disabled={!validForm}>
          로그인하기
        </S.SignInPageButton>
      </S.SignInPageForm>
    </S.SignInPageWrapper>
  );
}

export default SignInPage;
