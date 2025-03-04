// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { requestApi } from '../modules/Recruitment-Leader/services/request-api';
import modalReducer from '../shared/slices/modalSlice'
import { positionApi } from '../modules/Position/services/position-api';
import { requestRCTApi } from '../modules/Recruitment/Request-recruiter/services/requestRct-api';
import { callsApi } from '../modules/Recruitment/Calls/services/calls-api';


export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [positionApi.reducerPath]: positionApi.reducer,
    [requestRCTApi.reducerPath]: requestRCTApi.reducer,
    [callsApi.reducerPath]: callsApi.reducer,
  },
  middleware: (getDeaultMiddleware) => getDeaultMiddleware().concat(requestApi.middleware,positionApi.middleware,requestRCTApi.middleware,callsApi.middleware)
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
