import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { appSlice } from './slices/app-slice/app-slice'
import { appApi } from './services/app/app-api'
import { requestApi } from './services/request/request-api'
import { recruiterApi } from './services/recruiter/recruiter-api'

export const store = configureStore({
  reducer: {
   app: appSlice.reducer,
   [appApi.reducerPath]: appApi.reducer,
   [requestApi.reducerPath]: requestApi.reducer,
   [recruiterApi.reducerPath]: recruiterApi.reducer,
  },
  middleware: (getDeaultMiddleware) => getDeaultMiddleware().concat(appApi.middleware, requestApi.middleware,recruiterApi.middleware)
})


setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
