import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { appSlice } from './slices/app-slice/app-slice';
import { appApi } from './services/app/app-api';
import { requestApi } from './services/request/request-api';
import { recruiterApi } from './services/recruiter/recruiter-api';
import { CreateCollaborator } from '../dashboard/pages/requests-area-leader/components/table/service/request-service'

export const store = configureStore({
  reducer: {
   app: appSlice.reducer,
   [appApi.reducerPath]: appApi.reducer,
   [requestApi.reducerPath]: requestApi.reducer,
   [recruiterApi.reducerPath]: recruiterApi.reducer,
   [CreateCollaborator.reducerPath]: CreateCollaborator.reducer,
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(
         appApi.middleware, 
         requestApi.middleware, 
         recruiterApi.middleware,
         CreateCollaborator.middleware
      ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
