import React from "react";

import Defaltimage from "../../assets/image/defalts-image/jpg.jpg";
import { Link, json } from "react-router-dom";

function Moviecard({movie}) {

    const {original_title,poster_path,overview,id}=movie;

    
    const image=`https://image.tmdb.org/t/p/w500${poster_path}`;

    const moviestring=JSON.stringify(movie)
     

    function setDefaltimage(event){

      event.target.src=Defaltimage;

    }
        return(
        <div class="card mb-3 bg-dark text-light bg-opacity-75">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." onError={setDefaltimage}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{original_title}</h5>
              <p class="card-text">{overview}</p>
              <div className="mt-auto d-grid">
                <Link className="btn btn-danger col-6 mx-auto" to={{
                  pathname:`/movie/${original_title}/${id}`,
                  search:"?fliter=movie",
                  movie:{movie:moviestring},
                }}>Watch Or More Details</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
}

export default Moviecard;