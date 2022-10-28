import { configureStore } from '@reduxjs/toolkit'
import url from '../features/BaseUrl'
import staticUrl from '../features/StaticUrl'

export default configureStore({
  reducer: {
    url: url,
    staticUrl: staticUrl
  },
})