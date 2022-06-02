import React, { useEffect, useState } from "react";
import Manibanner from "../assets/img/banner.png"
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Movie from "../components/common/Movie";
import { getMovies } from '../reducks/movies/selectors';
import watch from "../assets/img/watch-now.svg"
import { useSelector } from 'react-redux';

import API from "../API";
const api = new API();


const Home = () => {
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const selector = useSelector(state => state);
    const movies = getMovies(selector);
     const [showplay, setShowPlay] =useState(false);
     const [seMovie, setseMovie] = useState();

const play =(movie)=>{
  console.log(" play the movie : ", movie)
  setseMovie(movie)
  setShowPlay(true)
}


        useEffect(() => {
            console.log("coming soon");
        api.getMovies({ release_type: 'Coming Soon'})
             
            .then(movies => {
                
                setMoviesCommingSoon(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
            console.log("Newly Released");
        api.getMovies({ release_type: 'Newly Released' })
            .then(movies => {
                setMoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);
   
    return (
        <div className="home">
           
            <Header/>
              <div class="main-image">
                
                  {/* {showplay && true?(<img src={showplay.img} alt="banner" />
                  ):(<img src={Manibanner} alt="banner" />) } */}
                  {/* <img src={Manibanner} alt="banner" /> */}

                  {showplay ?(console.log(" the movie name is :", seMovie.name),
                  <img src={seMovie.image} alt="banner" />):(<img src={Manibanner} alt="banner" />)}
        
      </div>

      <div class="watch-now">
        <div class="trailer">
          <img src={watch }alt="play-button" />
          <p>
             <br />
            in cinemas
          </p>
        </div>
        <div class="movie-text">
          
             <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            provident modi vitae quibusdam doloremque veritatis dolorem
            nesciunt, quidem accusantium est. Libero odit, molestias eum magni
            dolore aliquid animi eos numquam.
          </p>
         
        </div>
      </div>


            <main>
                <div class="heading">
                    <h2>Newly Released</h2></div>
                
                   {moviesNewReleased && moviesNewReleased.results.length >0 ?(
                       <section class="movie-container">
                       {moviesNewReleased.results.map(movie => (
                            <Movie movie={movie} play={()=>play(movie)} />
                        ))}
                      
                      </section>
             
          ):(console.log("no movie"))}


                
            </main>
             <div class="feature">
      <hr class="line" />
      <div class="heading"><h2>Coming Soon</h2></div>
      
          {moviesComingSoon && moviesComingSoon.results.length >0 ?(
              <section class="coming-soon">

              {
                  moviesComingSoon.results.map(movie =>(<Movie movie={movie} play={()=>play(movie)} />) )
              }
              </section>
          ):(console.log("no movie"))}

          

      
      </div>

            
            <Footer />
        </div>
    );

   
};

export default Home;
