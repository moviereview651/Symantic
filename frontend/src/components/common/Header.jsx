import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router';
import LogoImg from "../../assets/img/Synamatic-logo.svg"
import SearchImg from "../../assets/img/search-logo.svg"
import Catagery from "../../assets/img/Catagery.png"
import disLiked from "../../assets/img/Favrouits.png"






// banner.png,Synamatic-logo.svg, search-logo.svg

const Header = () => {
  const dispatch = useDispatch()
    const [search, setSearch]= useState();
    const searchMovie =()=>{
      console.log('the search is :', search)
        dispatch(push('/search/?search=' + search));

    }
   


  return (
    <div>
      <header>
     
      <nav>
        <div class="logo">
         
         <img src={LogoImg} alt="logo" onClick={()=> dispatch(push('/'))}/>
        </div>
        <div class="right-nav">
          <div class="search">         
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
            <img src={SearchImg} alt="search"onClick={searchMovie}/>
         
          </div>
          <img src={Catagery} alt="category"onClick={()=>dispatch(push('/Category'))}/>
          <img src={disLiked} alt="favorite" onClick={()=>dispatch(push('/Favourites'))}/>
        </div>
      </nav>



      {/* <div class="watch-now">
        <div class="trailer">
          <img src={watch }alt="play-button" onClick={play()}/>
          <p>
            {props.featureDate} <br />
            in cinemas
          </p>
        </div>
        <div class="movie-text">
          <p>
            {movieInfo}
          </p>
        </div>
      </div> */}
    </header>
    </div>
  )
}

export default Header
