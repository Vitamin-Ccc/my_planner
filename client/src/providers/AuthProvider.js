import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

// Probably won't use this (AuthContext and useContext instead)
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  //a null user is a user that is not logged in
  const [user, setUser] = useState(null);

  const handleRegister = async (user, navigate) => {
    //axios call to register users (interacting with DB)
    try {
      let res = await axios.post("api/auth", user);
      // console.log("res:", user);
      setUser(res.data.data);
      navigate("/dashboard")
      // navigate to a certain page

    } catch (err) {
      console.log(err.response);
      alert("error occurred registering user")
    }
  };

  const handleLogin = async (user, navigate) => {
    //axios call to login users (interacting with DB)
    try {
      let res = await axios.post("api/auth/sign_in", user);
      setUser(res.data.data);
      navigate("/dashboard")
    } catch (err) {
      console.log(err.response);
      alert("error occurred logging in user")
    }
  };

  const handleLogout = async (navigate) => {
    //axios call to logout users (interacting with DB)
    try {
      let res = await axios.delete("api/auth/sign_out");
      console.log(res);
      setUser(null);
      navigate("/login")
    } catch (err) {
      console.log(err.response);
      alert("error occurred logging out user")
    }
  };

  return (
    <AuthContext.Provider value={{
      ...user,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user !== null,
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;