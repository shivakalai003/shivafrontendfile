import React from "react";
import { Link } from "react-router-dom";

function Errorcomponent() {

    return(

        <div>   
<div class="modal fade show" style={{display: "block"}} >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-center">
         <div class="navbar-brand">React Copy
         </div>
       </div>
       </nav>
        </h1>
       </div>
       <div class="modal-body">
        Unfortunataley the page you are looking for the been moved or deleted
      </div>
      <div class="d-grid col-4 mx-auto">
        <Link type="button" class="btn btn-warning" to="/Home">Go to home page</Link>
      </div>
    </div>
  </div>
 </div>
 </div>
    )
    
}

export default Errorcomponent;