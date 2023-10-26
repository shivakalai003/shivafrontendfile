import React from "react";

const productcard=({Product})=>{

    return(
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Product.images[0]} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{Product.title}</h5>
        <p class="card-text">{Product.description}</p>
        </div>
    </div>
  </div>
</div>

    
)};

export default productcard;