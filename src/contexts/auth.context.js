import { createContext, useContext, useState, useMemo } from "react";

const initialValue = {
  signedIn: false,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext(initialValue);

export function AuthProvider({ children }) {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = () => setSignedIn(true);
  const signOut = () => setSignedIn(false);

  // useMemo를 사용한 value 객체 메모이제이션
  const value = useMemo(
    () => ({
      signedIn,
      signIn,
      signOut,
    }),
    [signedIn]
  ); // signedIn 상태가 변경된다면 value 객체를 새로 계산

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
