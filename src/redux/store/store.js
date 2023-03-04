import { configureStore } from '@reduxjs/toolkit'
import cuisineAndDietReducer from '../features/cuisineAndDiet/cuisineAndDietSlice'
import searchRequestReducer from '../features/searchRequest/searchRequestSlice'
import resultsReducer from '../features/results/resultsSlice' 
import favoritesReducer from '../features/favorites/favoritesSlice'

export default configureStore({
  reducer: {
    cuisineAndDiet: cuisineAndDietReducer,
    searchRequest: searchRequestReducer,
    results: resultsReducer,
    favorites: favoritesReducer,
  },
})