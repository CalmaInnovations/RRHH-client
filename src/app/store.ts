// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { requestApi } from "../modules/Recruitment-Leader/services/request-api";
import modalReducer from "../shared/slices/modalSlice";
import modalKanbanReducer from "../modules/Recruitment/Calls/slices/modalkanbanSlice";
import { positionApi } from "../modules/Position/services/position-api";
import { requestRCTApi } from "../modules/Recruitment/Request-recruiter/services/requestRct-api";
import { callsApi } from "../modules/Recruitment/Calls/services/calls-api";
import { postulantesApi } from "@/modules/Recruitment/Calls/services/postulantes-api";
import { entrevistasApi } from "@/modules/Recruitment/Calls/services/entrevista-api";
import { onboardingApi } from "@/modules/Recruitment/Calls/services/onboarding-api";
import { documentationApi } from "@/modules/Recruitment/Calls/services/documentation-api";

export const store = configureStore({
   reducer: {
      modal: modalReducer,
      modalKanban: modalKanbanReducer,
      [requestApi.reducerPath]: requestApi.reducer,
      [positionApi.reducerPath]: positionApi.reducer,
      [requestRCTApi.reducerPath]: requestRCTApi.reducer,
      [callsApi.reducerPath]: callsApi.reducer,
      [postulantesApi.reducerPath]: postulantesApi.reducer,
      [entrevistasApi.reducerPath]: entrevistasApi.reducer,
      [onboardingApi.reducerPath]: onboardingApi.reducer,
      [documentationApi.reducerPath]: documentationApi.reducer
   },
   middleware: (getDeaultMiddleware) =>
      getDeaultMiddleware().concat(
         requestApi.middleware,
         positionApi.middleware,
         requestRCTApi.middleware,
         callsApi.middleware,
         postulantesApi.middleware,
         entrevistasApi.middleware,
         onboardingApi.middleware,
         documentationApi.middleware,
      ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
