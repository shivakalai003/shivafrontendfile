import React, { Fragment, useContext, useState } from "react";
import UserForm from "./userForm";
import AuthenticationHook from "../../hooks/authhook";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../../Components/Layout";

function SignUp() {
  const { signUp,error } = AuthenticationHook();

  const navigate=useNavigate()

  const {setUser}=useContext(Appcontext)


  async function handleSubmit(signUpData) {

   const res= await signUp(signUpData.email, signUpData.password);

    if(res){
      setUser(res)
      navigate("/login")
    }

   };
  return (
    <Fragment>
     <UserForm handlesubmit={handleSubmit} error={error} />  
    </Fragment>

   
  );
}

export default SignUp;