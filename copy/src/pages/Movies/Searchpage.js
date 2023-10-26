import React, { useContext, useEffect, useState } from "react";

import { Appcontext } from "../../Components/Layout";

import Moviecard from "./Moviecard";

function Searchpage() {
    const {search}=useContext(Appcontext);

    const [searchresult,setsearchresult]=useState("")

   useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTBiNjVjODNlMGFkZWZkZjI5MzllN2FlZjJmODRmYSIsInN1YiI6IjY0YzVmNDAwOWI2ZTQ3MDExY2U4MDE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FGGnAIg2UqbPHZVZttoPpKDwBoyAYoU99ZtNCHW1Wu0'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, options)
        .then(response => response.json())
        .then(response => setsearchresult(response))
        .catch(err => console.error(err));

    
   },[search])

    return (

        <div>

            {searchresult && searchresult.results.map((movie)=>{
                return <Moviecard movie={movie} />;
            })}

        </div>
    )
    
    
}

export default Searchpage;  