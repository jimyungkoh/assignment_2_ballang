import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

import { useAuth } from "../../contexts/auth.context";
import { useSelector } from "react-redux";

export default function Header() {
  const { signedIn, signOut } = useAuth();
  const username = useSelector((state) => state.user.profile.nickname);
  return (
    <S.Header>
      <S.HeaderTop signedIn={signedIn}>
        <div>럭셔리 쇼핑이 참 쉽다, 발랑</div>
        <div>Online luxury boutique</div>
        <div>
          {signedIn ? (
            <>
              <span>환영합니다 {username}님!</span>
              <Link to="/my-page">마이 페이지</Link>
              <button onClick={signOut}>로그아웃</button>
            </>
          ) : (
            <Link to={"/sign-in"}>로그인</Link>
          )}
          <Link to={"/cart"}>장바구니</Link>
        </div>
      </S.HeaderTop>
      <S.HeaderContents>
        <S.HeaderLogo to={"/"}>BALLANG</S.HeaderLogo>
      </S.HeaderContents>
      <hr />
    </S.Header>
  );
}
