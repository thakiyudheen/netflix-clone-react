import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, BaseImage } from '../../constands/constants'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import StarRatings from 'react-star-ratings';






function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    console.log('this is working ')
   axios.get(`/trending/movie/week?api_key=${API_KEY}`).then((res )=>{
    console.log("this is data ",res.data.results);
    setMovie(res.data.results[9])
   }).catch((err)=>{
    console.log('network etet');
   })
   
  }, [])
  {console.log('titlwe',movie.title)}
  return (
   
    <div className="banner" style={{backgroundImage:`url(${movie? BaseImage+movie.backdrop_path:''})`}}>
   
        <div className="content">
        <h1 className='header'>{movie.title}</h1>
        <div className=" hidden sm:flex justify-center sm:justify-start ml-2">
                {movie.vote_average ? (
                  <h1 className="flex text-white text-xl drop-shadow-lg 2xl:text-lg">
                    <div className="-mt-1">
                      <StarRatings
                        rating={movie.vote_average / 2}
                        starRatedColor="red"
                        numberOfStars={5}
                        name="rating"
                        starDimension="1.1rem"
                        starSpacing="0.2rem"
                      />
                    </div>
                  </h1>
                ) : null}
              </div>
             
             
        <div className="buttons">
            <button className='button button1 '  > {<FaRegCirclePlay />}&nbsp;&nbsp; Play</button>
            <button className='button  button2 '>{<IoMdInformationCircleOutline />}&nbsp; More Info</button>
            
        </div>
        <p className='description'>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Banner