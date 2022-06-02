export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const addFavourites = favourites => {
    return {
        type: 'ADD_FAVOURITES',
        list: favourites
    };
};
export const DELETE_FAVOURITES = 'DELETE_FAVOURITES';
export const deleteFavouritesAction = favourites =>{
    
    return {
        type: 'DELETE_FAVOURITES',
        list: favourites
         
    }
}
export const FETCH_FAVOURITES = 'FETCH_FAVOURITES';
export const fetchFavourites = favourites => {
    return {
        type: 'FETCH_FAVOURITES',
        list: favourites
    }
}