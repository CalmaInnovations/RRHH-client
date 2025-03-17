import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../../config/Environments";
import { Entrevista, EntrevistaCreate, EntrevistaRes, EntrevistaUpdate } from "../interfaces/entrevista-interfaces";

export const entrevistasApi = createApi({
   reducerPath: "entrevistaApi",
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER }),
   tagTypes: ["Entrevistas"],
   endpoints: (builder) => ({

      getEntrevistas: builder.query<EntrevistaRes, void>({
         query: () => ({
            url: `api/Entrevista`,
            method: "GET",
            params: { pgSize: 40 },
         }),
         providesTags: ["Entrevistas"],
      }),

      getEntrevistaById: builder.query<Entrevista, number>({
         query: (idEntrevista) => ({
            url: `api/Entrevista/${idEntrevista}`,
            method: "GET",
         }),
         providesTags: (_result, _error, idEntrevista) => [{ type: "Entrevistas", id: idEntrevista }],
      }),

      createEntrevista: builder.mutation<EntrevistaCreate, Partial<EntrevistaCreate>>({
         query: (entrevista) => ({
            url: `api/Entrevista`,
            method: "POST",
            body: {
               ...entrevista, // data q tenemos q enviar
            },
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Entrevistas"],
      }),

      updateEntrevista: builder.mutation<Entrevista, { id: number; data: Partial<EntrevistaUpdate> }>({
         query: ({ id, data }) => ({
            url: `api/Entrevista/${id}`,
            method: "PUT",
            body: data,// data q tenemos q enviar
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Entrevistas"],
      }),

      deleteEntrevista: builder.mutation<void, number>({
         query: (id) => ({
            url: `api/Entrevista/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: ["Entrevistas"],
      }),



   }),
});

export const { useCreateEntrevistaMutation, useGetEntrevistasQuery, useGetEntrevistaByIdQuery, useUpdateEntrevistaMutation,useDeleteEntrevistaMutation } = entrevistasApi;
