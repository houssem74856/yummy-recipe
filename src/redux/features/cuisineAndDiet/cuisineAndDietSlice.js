import { createSlice } from '@reduxjs/toolkit'

export const cuisineAndDietSlice = createSlice({
  name: 'cuisineAndDiet',
  initialState: {
    value: {cuisine:null,diet:null},
  },
  reducers: {
    setCuisine: (state,action) => {
      state.value.cuisine = action.payload
    },
    setDiet: (state, action) => {
      state.value.diet = action.payload
    },
  },
})

export const { setCuisine, setDiet } = cuisineAndDietSlice.actions

export default cuisineAndDietSlice.reducer