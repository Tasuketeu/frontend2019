import React from 'react';
import s from './MovieContainer.module.css';
import {NavLink} from "react-router-dom";
import MovieTable from '../TableCreator/MovieTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Movie =(props)=>{
  return(
   <div class="content-width">
   <div class="container">
     <div class="row">
       <div class="col-md-8">
         <div class="btn-group mr-2 btn-sm">
           <div class="dropdown">
             <button
               class="btn btn-secondary dropdown-toggle"
               type="button"
               id="dropdownMenuButton"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
             >
               Format
             </button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <a class="dropdown-item" href="#">Lorem ipsum</a>
               <a class="dropdown-item" href="#">Lorem ipsum</a>
             </div>
           </div>
         </div>
         <div class="btn-group mr-2 btn-sm">
           <div class="dropdown">
             <button
               class="btn btn-secondary dropdown-toggle"
               type="button"
               id="dropdownMenuButton"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
             >
               Genre
             </button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <a class="dropdown-item" href="#">Lorem ipsum</a>
               <a class="dropdown-item" href="#">Lorem ipsum</a>
             </div>
           </div>
         </div>
         <div class="btn-group mr-2 btn-sm">
           <div class="dropdown">
             <button
               class="btn btn-secondary dropdown-toggle"
               type="button"
               id="dropdownMenuButton"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
             >
               Year
             </button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <a class="dropdown-item" href="#">Lorem ipsum</a>
               <a class="dropdown-item" href="#">Lorem ipsum</a>
             </div>
           </div>
         </div>
       </div>
       <div class="col-md-4">
         <div class="input-group">
           <input
             class="form-control py-2"
             type="search"
             value="search"
             id="example-search-input"
           />
           <span class="input-group-append">
             <button class="btn btn-outline-secondary" type="button">
             <FontAwesomeIcon icon={faCoffee} />
             </button>
           </span>
         </div>
       </div>
     </div>

     <div class="row">
       <table class="table">
         <thead>
           <tr>
             <th scope="col"></th>
             <th scope="col">Title</th>
             <th scope="col">Format</th>
             <th scope="col">Genre</th>
             <th scope="col">Year</th>
             <th scope="col">Rating</th>
           </tr>
         </thead>
         <tbody>
         
     <MovieTable rowNumber={rowIncrement.call()} filmName="Alien" filmType="Movie" filmGenre="Horror" filmYear="1979" filmRating="8.5"/>
     <MovieTable rowNumber={rowIncrement.call()} filmName="Alien" filmType="Movie" filmGenre="Horror" filmYear="1979" filmRating="8.5"/>
     <MovieTable rowNumber={rowIncrement.call()} filmName="Alien" filmType="Movie" filmGenre="Horror" filmYear="1979" filmRating="8.5"/>
     <MovieTable rowNumber={rowIncrement.call()} filmName="Alien" filmType="Movie" filmGenre="Horror" filmYear="1979" filmRating="8.5"/>
     <MovieTable rowNumber={rowIncrement.call()} filmName="Alien" filmType="Movie" filmGenre="Horror" filmYear="1979" filmRating="8.5"/>
         </tbody>
       </table>
     </div>
     <div class="row justify-content-end">
       <nav aria-label="Page navigation example">
         <ul class="pagination">
           <li class="page-item">
             <a class="page-link" href="#">Previous</a>
           </li>
           <li class="page-item"><a class="page-link" href="#">1</a></li>
           <li class="page-item"><a class="page-link" href="#">2</a></li>
           <li class="page-item"><a class="page-link" href="#">3</a></li>
           <li class="page-item"><a class="page-link" href="#">Next</a></li>
         </ul>
       </nav>
     </div>
   </div>
 </div>

  );
}

var count=0;

let rowIncrement=()=>{
  ++count;
  return count;
}

export default Movie;