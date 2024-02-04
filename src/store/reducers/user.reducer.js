import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    isLoggedIn: false,
    lastVisitedAt: null,
    grade: null,
    profile: {
      nickname: "udemey",
      age: 0,
      location: "",
    },
  },
  name: "user",
  reducers: {
    toggleLogin(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
    },

    updateProfile(state, action) {
      const { nickname, age, location } = action.payload;
      state.profile.nickname = nickname ?? state.profile.nickname;
      state.profile.age = age ?? state.profile.age;
      state.profile.location = location ?? state.profile.location;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { toggleLogin, updateProfile } = userSlice.actions;
