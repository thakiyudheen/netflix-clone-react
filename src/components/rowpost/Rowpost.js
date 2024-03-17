import React,{useEffect,useState, useRef} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, BaseImage } from '../../constands/constants'
import { RiArrowRightSFill } from "react-icons/ri";
import { RiArrowLeftSFill } from "react-icons/ri";
import YouTube,{ YouTubeProps }  from  'react-youtube'



function Rowpost({title,banner,movie}) {
  const [trailer,setTrailer]=useState('')
  const [movies, setMovies] = useState([])
  const postersRef = useRef(null);
  useEffect(() => {
  
    console.log('this is working ')
   axios.get(movie).then((res )=>{
    console.log("this is data ",res.data.results);
    setMovies(res.data.results)
   }).catch((err)=>{
    console.log('network etet');
   })

  }, [])


  const scrollHandler = (scrollOffset) => {
    if (postersRef.current) {
      postersRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleButtonClick = (scrollOffset, event) => {
    event.preventDefault(); // Prevent default button behavior
    scrollHandler(scrollOffset); // Scroll the posters container
  };
 
  const handlePlay=(id)=>{
    console.log('this is working');
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((res)=>{
     
      if(res.data.results.length!==0){
        console.log(res.data.results[0]);
        setTrailer(res.data.results[0])
      }
    }).catch((err)=>{
      console.log('this is not ok');
    })
  }
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className='container'>
      <div className="head">
      <h2>{title}</h2>
      </div>

      
      <div className='row'>
     
        <div className='arrow left-arrow' onClick={(e) => handleButtonClick(-100, e)}> {<RiArrowLeftSFill />} </div>
       
        <div className='posters' ref={postersRef}>
          {movies.map((el, index) => (
            <img key={index} onClick={()=>handlePlay(el.id)} className='poster' alt='poster' src={`${banner ? BaseImage + el.backdrop_path : BaseImage + el.poster_path}`} />
          ))}
        </div>
        {trailer&&<YouTube videoId={trailer.key} opts={opts}  />}
        <div className='arrow right-arrow' onClick={(e) => handleButtonClick(100, e)}> {<RiArrowRightSFill />} </div>
      </div>
    </div>
  );
}



export default Rowpost



