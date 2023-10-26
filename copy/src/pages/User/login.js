import React, { useContext, useState } from 'react';
import AthenticationHook from "../../hooks/authhook";
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../../Components/Layout';

function Login() {
  const [email,setemail]=useState("");

  const [password,setpassword]=useState("");
  const {setUser}=useContext(Appcontext)
  const {login,error}=AthenticationHook();

  const navigate=useNavigate();

 async function handlesubmit(e) {
   e.preventDefault();

   const res= await login(email,password);
   
   if(res){
    setUser(res)

    navigate("/");
   };
    
  };
  
  return (
    <div className='col-8 col-lg-5 mx-auto'>

      <div className='card border-0 shadow-sm'>
        <div className='card-body'>
       { error && <div className="alert alert-danger"> {error} </div>}
     <form className='row g-2' onSubmit={handlesubmit}>
     <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" 
    class="form-control"
     id="email" 
     value={email}
     aria-describedby="emailHelp"
     onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="password" class="form-label">Password</label>
    <input type="password" 
    class="form-control"
     id="password"
     value={password}
     name='password'
     onChange={(e)=>setpassword(e.target.value)}/>
  </div>
  <div className='col-12 text-center'>
  <button type="submit" class="btn btn-primary ">Submit</button>
  </div>
 
</form>
        </div>

      </div>
    </div>
  )
};

export default Login;