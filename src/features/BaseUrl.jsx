import { createSlice } from '@reduxjs/toolkit'

export const url = createSlice({
  name: 'url',
  initialState: {
    value: "https://instagrambackendclone.herokuapp.com/api/",
  },
})

export default url.reducer