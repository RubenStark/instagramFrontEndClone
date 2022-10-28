import { createSlice } from '@reduxjs/toolkit'

export const staticUrl = createSlice({
  name: 'staticUrl',
  initialState: {
    value: "https://instagrambackendclone.herokuapp.com/static",
  },
})

export default staticUrl.reducer