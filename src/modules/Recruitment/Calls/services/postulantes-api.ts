import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../../config/Environments";
import { Persona, Postulante, PostulantesRes } from "../interfaces/postulantes-interfaces";

export const postulantesApi = createApi({
   reducerPath: "postulantesApi",
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER }),
   tagTypes: ["Postulantes"],
   endpoints: (builder) => ({
      getPostulantes: builder.query<PostulantesRes, void>({
         query: () => ({
            url: `api/Postulante`,
            method: "GET",
            params: { pgSize: 40 },
         }),
         providesTags: ["Postulantes"],
      }),

      getPostulanteById: builder.query<Postulante, number>({
         query: (idPostulante) => ({
            url: `api/Postulante/${idPostulante}`,
            method: "GET",
         }),
         providesTags: (_result, _error, idPostulante) => [{ type: "Postulantes", id: idPostulante }],
      }),


      createPostulante: builder.mutation<Persona, Partial<Persona>>({
         query: (persona) => ({
            url: `api/Postulante`,
            method: "POST",
            body: {
               ...persona, // data q tenemos q enviar
            },
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Postulantes"],
      }),

      updatePostulanteEstado: builder.mutation<void, { id: number; estado: string }>({
         query: ({ id, estado }) => ({
            url: `api/Postulante/cambiar-estado/${id}`,
            method: "PATCH",
            body: { estado },
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Postulantes"],
      }),

      updatePostulante: builder.mutation<Postulante, { id: number; data: Partial<Persona> }>({
         query: ({ id, data }) => ({
            url: `api/Postulante/${id}`,
            method: "PUT",
            body: data,
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Postulantes"],
      }),

   }),
});

export const { useGetPostulantesQuery, useCreatePostulanteMutation, useUpdatePostulanteEstadoMutation, useGetPostulanteByIdQuery ,useUpdatePostulanteMutation} = postulantesApi;
