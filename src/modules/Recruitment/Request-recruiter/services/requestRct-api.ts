import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../../../config/Environments';
import { SolicitudesRCTRes } from '../interfaces/RequestRct-interfaces';



export const requestRCTApi = createApi({
   reducerPath: 'requestRctApi',
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER}),
   endpoints: (builder) => ({
      getSolicitudesRct: builder.query<SolicitudesRCTRes,{ page: number; pageSize: number }>({
         query: ({ page, pageSize }) => ({
               url: `api/SolicitudColaborador`,
               method: "GET",
               params: { pgNum: page, pgSize: pageSize }
         }),
      }),

      convertirSolicitud: builder.mutation<void, { id: number; reclutadorId: number }>({
         query: ({ id, reclutadorId }) => ({
            url: `api/SolicitudColaborador/convertir-solicitud/${id}`,
            method: "POST",
            body: { reclutadorId },
         }),
      }),


   }),
 })

 export const {
    useGetSolicitudesRctQuery,
    useConvertirSolicitudMutation
 } = requestRCTApi;
