import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../../config/environment';
import { SolicitudesRes } from '../../../dashboard/pages/recruitment/request-area-recruiter/interfaces/solicitud-interface';
import { Collaborator } from '../../../dashboard/pages/requests-area-leader/interface/request-items.model';

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
               url: `/api/SolicitudColaborador`,
               method: "POST",
               body: collaborator
            }
         },
      }),
   }),
 })

 export const { useGetSolicitudesQuery, useCreateColaboradorServiceMutation } = requestApi;
