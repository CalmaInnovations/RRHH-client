import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../../config/Environments';
import { SolicitudesColaborador, SolicitudesRes } from '../interfaces/Request-interfaces';

export const requestApi = createApi({
   reducerPath: 'requestApi',
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER}),
   tagTypes: ["Solicitudes"],
   endpoints: (builder) => ({
      getSolicitudes: builder.query<SolicitudesRes,{ page: number; pageSize: number }>({
         query: ({ page, pageSize }) => ({

               url: `api/SolicitudColaborador`,
               method: "GET",
               params: { pgNum: page, pgSize: pageSize }

         }),
         providesTags: ["Solicitudes"],
      }),

      createSolicitud: builder.mutation<SolicitudesColaborador, Partial<SolicitudesColaborador>>({
         query: (solicitud) => ({
            url: `api/SolicitudColaborador`,
            method: "POST",
            body: {
               colaboradorLiderId: 2,  // valor q siempre enviaremos ya que aun no contamos con una authenticacion en la pagina para q reconozca el id del lider
               ...solicitud, // data q tenemos q enviar
            },
            headers: {
               "Content-Type": "application/json",
            },
         }),
         invalidatesTags: ["Solicitudes"],
      }),

   }),
 })

 export const {
    useGetSolicitudesQuery,useCreateSolicitudMutation
 } = requestApi;
