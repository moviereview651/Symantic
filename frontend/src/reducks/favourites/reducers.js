import * as Actions from './actions';
import initialState from '../store/initialState';


export const FavouritesReducer = (state = initialState.favourites, action)=>{
    switch (action.type) {
        case Actions.ADD_FAVOURITES:
           
            return {
                ...state,
                list: action.list
            }
        case Actions.DELETE_FAVOURITES:
            return {
                ...state,
                list: action.list
            }   
        case Actions.FETCH_FAVOURITES:
            return {
                ...state,
                list: action.list
            }
            default:
            return state;    
    }
};
////////////////////////////////////////////////
// import * as Actions from './actions';
// import initialState from '../store/initialState';

// export const FavouritesReducer = (state = initialState.favourites, action)=>{
//     switch (action.type) {
//         case Actions.ADD_FAVOURITES:
//             return {
//                 ...state,
//                 list: action.list
//             }
//         case Actions.DELETE_FAVOURITES:
//             return {
//                 ...state,
//                 list: action.list
//             }
//         case Actions.FETCH_FAVOURITES:
//             return {
//                 ...state,
//                 list: action.list
//             }
//         default:
//             return state;
//     }
// };