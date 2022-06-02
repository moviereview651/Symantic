import { createSelector } from 'reselect';

const favouritesSelector = state => state.favourites;// the favourite is from the store favouriteReducer

export const getFavourites = createSelector([favouritesSelector], state => state.list);