import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Moviecard from './Moviecard';

function ViewMovie() {

   const {movieId}=useParams();

   const [movie,setmovie]=useState("");

   useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTBiNjVjODNlMGFkZWZkZjI5MzllN2FlZjJmODRmYSIsInN1YiI6IjY0YzVmNDAwOWI2ZTQ3MDExY2U4MDE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FGGnAIg2UqbPHZVZttoPpKDwBoyAYoU99ZtNCHW1Wu0'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(response => response.json())
      .then(response => setmovie(response))
      .catch(err => console.error(err));

  },[movieId]);

  
  const {backdrop_path}=movie;
  const backdrop= `https://image.tmdb.org/t/p/w500${backdrop_path}`;



   

  return (
   <div class="card text-bg-dark">
  <img src={backdrop} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <Moviecard movie={movie}/>
   </div>
  </div>
  );
}

export default ViewMovie;