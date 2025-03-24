import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../../config/Environments";
import { ColaboradorOnboarding, Onboarding, OnboardingRes, OnboardingUdate } from "../interfaces/onboarding-interfaces";

export const onboardingApi = createApi({
   reducerPath: "onboardingsApi",
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER }),
   tagTypes: ["Onboardings"],
   endpoints: (builder) => ({
      getColaboradoresOnboarding: builder.query<ColaboradorOnboarding[], void>({
         query: () => ({
            url: `Onboarding/colaboradoresdispo`,
            method: "GET",
         }),
         providesTags: ["Onboardings"],
      }),

      getOnboardings: builder.query<OnboardingRes, void>({
         query: () => ({
            url: `Onboarding`,
            method: "GET",
         }),
         providesTags: ["Onboardings"],
      }),

      getOnboardingById: builder.query<Onboarding, number>({
         query: (idOnboarding) => ({
            url: `Onboarding/${idOnboarding}`, //de hecho se esta pasadon el id del porstulante por que asi lo maneja en el backend
            method: "GET",
         }),
         providesTags: (_result, _error, idOnboarding) => [{ type: "Onboardings", postulanteId: idOnboarding }],
      }),

      updateOnboarding: builder.mutation<Onboarding, { id: number; data: Partial<OnboardingUdate> }>({
         query: ({ id, data }) => ({
            url: `Onboarding/${id}`,  //de hecho se esta pasadon el id del porstulante por que asi lo maneja en el backend
            method: "PUT",
            body: data,// data q tenemos q enviar
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Onboardings"],
      }),



   }),
});

export const { useGetColaboradoresOnboardingQuery, useGetOnboardingsQuery, useGetOnboardingByIdQuery,useUpdateOnboardingMutation } = onboardingApi;
