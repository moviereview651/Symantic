import API from '../../API';
import {addFavourites,deleteFavouritesAction,fetchFavourites} from "./actions"
  
  const api = new API();
  const FAVOURITES_KEY = 'FAVOURITES_KEY';

export const add_Favourite = place => {
      console.log(" is the movie added :",place);
    return async (dispatch, getState) => {        
        let prevFavourites = getState().favourites.list;         
        const nextFavorites = [place, ...prevFavourites];
        
        setToLocalStorage(nextFavorites);
        console.log(" what is set to local storage:",nextFavorites);
        dispatch(addFavourites(nextFavorites));
    };
};

export const delete_Favourite = id => {
      console.log(" the movie id is  :",id);
    return async (dispatch, getState) => {
        let prevFavourites = getState().favourites.list;
        const nextFavourites = prevFavourites.filter(image => image.id != id);
        console.log(" the deleted  is  :",nextFavourites);
        setToLocalStorage(nextFavourites);
        dispatch(deleteFavouritesAction(nextFavourites));
    };
};

  export const fetchFromLocalStorage =()=>{
    return async dispatch => {
        let favouritesJSON = localStorage.getItem(FAVOURITES_KEY);
        let favourites = [];
        if(favouritesJSON){
            favourites = JSON.parse(favouritesJSON);

        }
        dispatch(fetchFavourites(favourites));
  };
  }
  const setToLocalStorage = favourites =>{
      localStorage.setItem(FAVOURITES_KEY,JSON.stringify(favourites));
  }

