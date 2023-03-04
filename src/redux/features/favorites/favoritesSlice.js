import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state,action) => {
      state.favorites = [...state.favorites,action.payload]
    },
    removeFromFavorites: (state,action) => {
      state.favorites = state.favorites.filter(recipe => recipe.id !== action.payload)
    },
  },
})

export const { addToFavorites , removeFromFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer