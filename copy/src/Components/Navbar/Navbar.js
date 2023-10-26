import React,{Fragment, useContext, useEffect} from "react";


import { Link } from "react-router-dom";

import { Appcontext } from "../Layout";

import AthenticationHook from "../../hooks/authhook";



function Navbar() {

  const {search,setsearch,user,setUser}=useContext(Appcontext);

  const {}=AthenticationHook();

  useEffect(()=>{
    console.log(user);
  },[user]);

  function setvalue(event){

    setsearch(event.target.value)
  }
  function logout() {
    setUser(null)
    localStorage.removeItem("userData")
    
  }

  return(

   <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark navbar-dark ">
  <div class="container-fluid  text-light  btn btn-dark">
    <Link class="navbar-brand " to="/" >Ring Movies</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {
        user && <Fragment>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Movie">Movie</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Products">products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="class">classcomponet</Link>
        </li>
      </ul>
      
        </Fragment>
      }
        <div className= "d-flex ms-auto">
          {
            user && 
            <Fragment>
              <form class="d-flex ms-auto " role="search">
        <input class="form-control me-2" 
        type="search" placeholder="Search" 
        aria-label="Search" value={search} 
        onChange={setvalue}
        />
        </form>
         <button className="btn btn-light d-grid " onClick={logout}>Logout</button>
           </Fragment>
            
          }
          {
            !user &&(

              <div className="d-flex"> <Link to="/signup" className="btn btn-light">SignUp</Link>

              <Link to="/login" className="btn btn-light m-1 d-flex">Login</Link>
              </div>
            )
          }

         
        </div>
    </div>
  </div>
</nav>
 );

    }

    export default Navbar;

