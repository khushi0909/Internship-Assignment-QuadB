import React from 'react'
// import Summary from './Summary';
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";


export const MoviesCont = (props) => {
    

    const {movieData} = props;

    const {name,image,language,genres,runtime,id} = movieData
    console.log(movieData)

  return (
    <div className="cardContainer" >
        <Link style={{ textDecoration: 'none' } }to={"/summary/" + id}> 

        <img  className = "movieImg" src= {image.medium} alt ="movie banner"/>
        <div>Movie Name:{name}</div>
        <div>Language: {language}</div>
        <div>Genres: {genres.join(" , ")}</div>
        <div>Runtime: {runtime}</div>


        </Link>


    </div>
  )
}

export default MoviesCont
