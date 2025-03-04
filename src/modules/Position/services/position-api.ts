import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../../config/Environments';
import { PuestoRes } from '../interfaces/Position-interfaces';


export const positionApi = createApi({
   reducerPath: 'positionApi',
   baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER}),
   endpoints: (builder) => ({
      getPositions: builder.query<PuestoRes,void>({
         query: () => {
            return {
               url: `api/Puesto`,
               method: "GET",
            }
         },
      }),



   }),
 })

 export const {
    useGetPositionsQuery
 } = positionApi;
