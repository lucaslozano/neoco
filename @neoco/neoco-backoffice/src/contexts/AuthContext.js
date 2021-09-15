import React, { createContext, useState } from "react";

const AuthContext = createContext();

const initState = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return defaultValue;
  }
};

export const AuthProvider = ({ children, sidebarProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initState("isLoggedIn", false));
  const [user, setUser] = useState(initState("user", {}));

  const login = ({ token, user: nextUser }) => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(nextUser));

    setUser(nextUser);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser({});
    setIsLoggedIn(false);
  };

  const updateUser = (nextUser) => {
    localStorage.setItem("user", JSON.stringify({ ...user, ...nextUser }));
    setUser({ ...user, ...nextUser });
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, login, logout, updateUser, sidebarProps }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
