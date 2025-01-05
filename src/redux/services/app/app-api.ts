import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
   reducerPath: 'appApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
   endpoints: (builder) => ({
      getSolicitudColaborador: builder.query<void, string>({
         query: () => {
            return {
               url: `/api/SolicitudColaborador`,
               method: "GET"
            }
         },
       }),
   }),
 })

 export const { useGetSolicitudColaboradorQuery } = appApi;
