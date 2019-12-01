import React from 'react';
import s from './MovieTableContainer.module.css';

const MovieTable =(props)=>{
  return(
    <tr>
    <th scope="row">{props.rowNumber}</th>
    <td>{props.filmName}</td>
    <td>{props.filmType}</td>
    <td>{props.filmGenre}</td>
    <td>{props.filmYear}</td>
    <td>{props.filmRating}</td>
  </tr>
  );
}

export default MovieTable;