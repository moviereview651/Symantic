import React from 'react';

import liked from '../../assets/img/like.svg';
import Trailer_btn from '../../assets/img/Trailer-button.svg';
import star from '../../assets/img/star.png';
import { useDispatch } from 'react-redux';

import { delete_Favourite } from '../../reducks/favourites/operations';

const FavCard = ({ favourite }) => {
    const dispatch = useDispatch();

    return (
        <div class="movie">
            <div class="image">
                <img id=" likeImage" src={favourite.image} alt="movie" />
            </div>
            <div class="like">
                <div className="likesbutton" onClick={() => dispatch(delete_Favourite(favourite.id))}>
                    <img src={liked} alt="" />
                </div>
            </div>
            <div class="name">
                <p>{favourite.name}</p>
            </div>
            <div class="info">
                <div class="rating">
                    <img src={star} alt="star-rate" />
                    <p>{favourite.rating} 
                    <span>/10</span></p>
                </div>
                <div class="trailer-btn">
                    <img src={Trailer_btn} alt="trailer-btn" />
                </div>
            </div>
        </div>
    );
};

export default FavCard;
