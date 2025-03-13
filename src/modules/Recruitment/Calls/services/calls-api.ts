import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../../../config/Environments';
import { CallDetail, CallRes, RecruiterAvailableRes } from '../interfaces/calls-interfaces';


export const callsApi = createApi({
   reducerPath: 'recruiterAvbApi',
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER}),
   endpoints: (builder) => ({
    getReclutadoresAvb: builder.query<RecruiterAvailableRes,void>({
         query: () => ({
               url: `api/Convocatoria/reclutadores-disponibles`,
               method: "GET",
         }),
      }),
   getConvocatorias: builder.query<CallRes,{ page: number; pageSize: number }>({
         query: ({ page, pageSize }) => ({
               url: `api/Convocatoria`,
               method: "GET",
               params: { pgNum: page, pgSize: pageSize }
         }),
      }),

      getConvocatoriaById: builder.query<CallDetail, number>({
         query: (idConvocatoria) => ({
            url: `api/Convocatoria/${idConvocatoria}`,
            method: "GET",
         }),
      }),

   }),
 })

 export const {
    useGetReclutadoresAvbQuery,
    useGetConvocatoriasQuery,
    useGetConvocatoriaByIdQuery
 } = callsApi;
