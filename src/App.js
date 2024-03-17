import { useEffect,useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Rowpost from './components/rowpost/Rowpost';
import axios from './axios'
import { API_KEY } from './constands/constants';
import Footer2 from './components/footer/Footer';
import { Action, Animated, TopRighted, TrendingNow } from './constands/url';



function App() {
  
  // const [TopRighted, setRighted] = useState([])
  // const [Trending, setTrending] = useState([])
  // const [Animated, setAnimated] = useState([])
    
  return (
    <div className="App">
       <NavBar />
       <Banner/>
       <Rowpost title={"TOP RIGHTED"}  movie={TopRighted} />
       <Rowpost title={"Trendin NOw"}  banner movie={TrendingNow}/>
       <Rowpost title={"Animation"}  movie={Animated}/>
       <Rowpost title={"Action"}  movie={Action}/>
       <Footer2/>
    </div>
  );
}

export default App;
