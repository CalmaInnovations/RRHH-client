import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../../config/Environments";
import { ApiResponse, Documentations, UpdatedDocumentacion } from "../interfaces/documentacion-interfaces";


export const documentationApi = createApi({
   reducerPath: "documentacionesApi",
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER }),
   tagTypes: ["Documentations"],
   endpoints: (builder) => ({
      getDocumentations: builder.query<Documentations[], void>({
         query: () => ({
            url: `api/Documentacion/Documentacionpostulantes`,
            method: "GET",
         }),
         providesTags: ["Documentations"],
      }),

      getDocumentationById: builder.query<Documentations, number>({
         query: (idDocumentation) => ({
            url: `api/Documentacion/${idDocumentation}`,
            method: "GET",
         }),
         transformResponse: (response: ApiResponse) => response.documentacionPostulante, // Extrae la data correcta
         providesTags: (_result, _error, idDocumentation) => [
            { type: "Documentations", postulanteId: idDocumentation },
         ],
      }),

      updateDocumentation: builder.mutation<UpdatedDocumentacion, { id: number; data: Partial<UpdatedDocumentacion> }>({
         query: ({ id, data }) => ({
            url: `api/Documentacion/${id}/documentos`,  //de hecho se esta pasadon el id del porstulante por que asi lo maneja en el backend
            method: "PUT",
            body: data,// data q tenemos q enviar
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Documentations"],
      }),

      createDocumentation: builder.mutation<Documentations, Partial<Documentations>>({
         query: (data) => ({
            url: `registrar-documento`,
            method: "POST",
            body: {
               ...data, // data q tenemos q enviar
            },
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Documentations"],
      }),

   }),
});

export const { useGetDocumentationsQuery, useGetDocumentationByIdQuery, useUpdateDocumentationMutation,useCreateDocumentationMutation } = documentationApi;
