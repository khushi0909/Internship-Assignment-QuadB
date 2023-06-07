import React, { useEffect, useState } from 'react'
import MoviesCont from './MoviesCont'
export const Body = () => {

    const [movieCards,setMovieCards] = useState([])


    useEffect(()=>{
            fetchMovies()
    },[])

   const  fetchMovies = async () =>{

            const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
            const json = await data.json()
        //     console.log(json)
        // console.log(json[0].show.id)
        setMovieCards(json)
   }

  return (
    <div className="Container">
        {
            movieCards.map((mov)=>(
                <><MoviesCont key={mov.show.id} movieData={mov.show} />
                </>

            ))
        }
            


    </div>
  )
}

export default Body
