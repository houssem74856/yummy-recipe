import { createSlice } from '@reduxjs/toolkit'

export const searchRequestSlice = createSlice({
  name: 'searchRequest',
  initialState: {
    value: false,
  },
  reducers: {
    ThereIsSearchRequest: (state) => {
      state.value = true
    },
    ThereIsNotSearchRequest: (state) => {
      state.value = false
    }
  },
})

export const { ThereIsSearchRequest, ThereIsNotSearchRequest } = searchRequestSlice.actions

export default searchRequestSlice.reducer