import React, { useContext, useState } from "react";
import axios from "axios";
import {User} from "./user.model";
import { Appcontext } from "../Components/Layout";

function AthenticationHook() {

  const [error, seterror] = useState(null);


  const signUp = async(email, password) => {
    try {
      const resdata = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcRNV0JCwASP9EwnlxAV_M26mh6shMb8M",
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      return handleAthuentication(resdata);
    } catch (error) {
      handleerror(error);
    };
  };
  const login = async (email, password) => {
    try {
      const resdata = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcRNV0JCwASP9EwnlxAV_M26mh6shMb8M",
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      return handleAthuentication(resdata);
    } catch (error) {
      handleerror(error);
    };
  };

  function handleAthuentication(resdata) {
    const expiresdate = new Date(
      new Date().getTime() + resdata.data.expiresIn * 1000
    );

    const currentUser = new User(
      resdata.data.email,
      resdata.data.localId,
      expiresdate,
      resdata.data.idToken
    );
    localStorage.setItem("userdata", currentUser);

    return currentUser

   
  }
  function handleerror(error) {
    switch (error.response.data.error.message) {
      case "EMAIL_EXISTS":
        seterror("Email is already exists");
        break;
      case "EMAIL_NOT_FOUND":
        seterror("Email is incorrect");
        break;
      case "INVALID_PASSWORD":
        seterror("Password is incorrect");
        break;
      default:
        seterror("An unknown error occurred");
    };
  };

  return {
    error,
    signUp,
    login,
    
  };
}

export default AthenticationHook;
