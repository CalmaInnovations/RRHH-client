import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../../config/environment';
import { Collaborator } from '../../../dashboard/pages/requests-area-leader/interface/request-items.model';
import { RequestUpdateValues, SolicitudesRes } from '../../interfaces/Request/resquest-interfaces';

interface PaginationParams {
   pgNum: number;
   pgSize: number;
}

export const requestApi = createApi({
   reducerPath: 'requestApi',
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER}),
   endpoints: (builder) => ({
      getSolicitudes: builder.query<SolicitudesRes, PaginationParams>({
         query: ({pgNum, pgSize}: PaginationParams) => {
            return {
               url: `api/SolicitudColaborador?pgNum=${pgNum}&pgSize=${pgSize}`,
               method: "GET"
            }
         },
      }),

      createColaboradorService: builder.mutation<{message: string}, Collaborator>({
         query: (collaborator: Collaborator) => {
            return {
               url: `api/SolicitudColaborador`,
               method: "POST",
               body: collaborator
            }
         },
      }),

      editRequest: builder.mutation< {message: string }, {values: RequestUpdateValues, id_request: number}>({
         query: ({id_request, values}) => {
            return {
               url: `/api/SolicitudColaborador/${id_request}`,
               method: "PUT",
               body: values
            }
         }
      })
   }),
 })

 export const { useGetSolicitudesQuery, useCreateColaboradorServiceMutation, useEditRequestMutation } = requestApi;
