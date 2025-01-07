import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { environment } from '../../../config/environment';
import { RecruiterRes } from '../../interfaces/Recruiter/recruiter-iterfaces';

export const recruiterApi = createApi({
  reducerPath: 'recruiterApi',
  baseQuery: fetchBaseQuery({ baseUrl: environment.API_MASTER }),
  endpoints: (builder) => ({
    getReclutadores: builder.query<RecruiterRes, void>({
      query: () => ({
        url: 'api/Convocatoria/reclutadores-disponibles',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetReclutadoresQuery } = recruiterApi;
