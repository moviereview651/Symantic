import React, { useEffect, useState } from 'react'
import disLiked from "../../assets/img/favorite.svg"
import liked from "../../assets/img/like.svg"
import Trailer_btn from "../../assets/img/Trailer-button.svg"
import star from "../../assets/img/star.png"
import { useDispatch, useSelector } from 'react-redux'
import { add_Favourite, fetchFromLocalStorage } from '../../reducks/favourites/operations'
import {delete_Favourite} from '../../reducks/favourites/operations'
import { getFavourites } from '../../reducks/favourites/selectors';
 

const Movie = (props) => {
 const dispatch = useDispatch();
 
  const selector = useSelector(state=>state);
  const favourite = getFavourites(selector);
  const [showLike,setShowLike] = useState(false);

  const favouriteMovie=(movie)=>{
    setShowLike(true)
    dispatch(add_Favourite(movie));   
    
    
  }
  const deleteFavouriteMovie=(movie)=>{
    setShowLike(false)
    dispatch(delete_Favourite(movie));
    console.log(" the deletd id is :", movie)
    
  
  }

  useEffect(()=>{
   
    if (favouriteMovie.length > 0) {
      setShowLike(false)
    }
  },[])


 
  return (
           <div class="movie">
          <div class="image">
            <img id =" likeImage" src={props.movie.image} alt="movie" onClick={props.play}/>
          </div>
          <div class="like" >            
           
        


           {showLike && true?(<img src={liked} alt =" " onClick={()=>{deleteFavouriteMovie(props.movie.id)}}/>
           ):(<img src={disLiked} alt =" " onClick={()=>{favouriteMovie(props.movie)}}/>)}
            
          </div>
          <div class="name">
            <p>{props.movie.name}</p>
          </div>
          <div class="info">
            <div class="rating">       
              <img src={star} alt="star-rate" />
              <p>{props.movie.rating} <span>/10</span></p>
            </div>
            <div class="trailer-btn">
              <img src={Trailer_btn} alt="trailer-btn"/>
            </div>
          </div>
        </div>
  )
}

export default Movie
