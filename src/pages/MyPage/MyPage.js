import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin, updateProfile } from "../../store/reducers/user.reducer";
import styled from "styled-components";

function MyPage() {
  const dispatch = useDispatch();
  const { isLoggedIn, profile } = useSelector((state) => state.user);
  const [editProfile, setEditProfile] = useState(profile); // 프로필 상태 초기화
  const [editing, setEditing] = useState(false); // 수정 상태 관리

  const handleLoginToggle = () => {
    dispatch(toggleLogin());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing((prevEditing) => !prevEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(editProfile));
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <Main>
      <div>
        <h2>프로필</h2>
        <ProfileForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nickname"
            value={editProfile.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            disabled={!editing}
          />
          <Input
            type="number"
            name="age"
            value={editProfile.age || ""}
            onChange={handleChange}
            placeholder="나이"
            disabled={!editing}
          />
          <Input
            type="text"
            name="location"
            value={editProfile.location}
            onChange={handleChange}
            placeholder="위치"
            disabled={!editing}
          />
          {editing ? (
            <Button type="submit">저장</Button>
          ) : (
            <Button type="button" onClick={handleEdit}>
              수정
            </Button>
          )}
        </ProfileForm>
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
export default MyPage;
