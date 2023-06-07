import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom';
// import RegisterForm from './RegisterForm';



 const Summary = () => {
const {movId} = useParams();

const [sumInfo,setSumInfo] = useState([])




useEffect(()=>{
  fetchDetails()
},[])

const fetchDetails = async () =>{

    const data =await fetch("https://api.tvmaze.com/shows/"+ movId)
    const json =  await data.json();
    console.log(json)
    console.log(json.summary)
  setSumInfo(json)
 

}

if(sumInfo.length === 0)return console.log("null")

const pattern = (/<(p)\s*class\s*=\s*['\"]\s*align-left\s*['\"]\s*[^<]*<\/\1\s*>/g )

  return (
    <div className="summaryContainer">
      <div className='summary1'>
        <img class="sumimg" src ={sumInfo.image.medium} alt="banner"/>

        <div className="rest">
          <h2>{sumInfo.name}</h2>
            <h3>rating : {sumInfo.rating.average}</h3>
            <h3>Genere : {sumInfo.genres}</h3>
          
            <h3>Language : {sumInfo.language}</h3>
            <Link to={"/summary/form/"+ movId} state={sumInfo}> 
            <button > 
                  Book Ticket
            </button>
            </Link>
        </div>
      </div>
      <div className= 'summary2'> 
      <h3>About The Movie</h3>
      <p>
      {sumInfo.summary.replace(pattern ," ")}

      </p>
      </div>

    </div>
  )
}

export default Summary
