import clientAxios from "../../../../../config/client-axios";
import {  CallDetail } from "../../request-area-recruiter/interfaces/calls-interface";
import { InductionGeneralUpdate, ListRecruiters, Postulant, PostulantDataComplete } from "../interface/call.interface";

export const getCallByIdService = async (id_call: number) => {
   const response = await clientAxios.get<CallDetail>(`api/Convocatoria/${id_call}`)
   return response;
}

export const getPostulantsService = async (type: string = "Postulante") => {
   const response = await clientAxios.get<Postulant[]>(`api/Postulante/estado/${type}`)
   return response
}

export const getInterviewedService = async (type: string = "Entrevista") => {
   const response = await clientAxios.get<Postulant[]>(`api/Postulante/estado/${type}`)
   return response
}

export const getInductionsService = async (type: string = "Induccion general") => {
   const response = await clientAxios.get<Postulant[]>(`api/Postulante/estado/${type}`)
   return response
}

export const createPostulantService = async (values: Postulant) => {
   const response = await clientAxios.post<Postulant[]>(`api/Postulante`, values)
   return response
}

export const withdrawProcessService = async (id_postulant: number) => {
   const response = await clientAxios.put<{message: string}>(`api/Postulante/descartar/${id_postulant}`);
   return response;
}

export const getDataPostulantService = async (id_postulant: number) => {
   const response = await clientAxios<PostulantDataComplete>(`api/Postulante/${id_postulant}`);
   return response
}

export const setPunctualInterviewService = async (id_postulant: number, values: { puntaje: number, comentarios: string}) => {
   const response = await clientAxios.put<{message: string}>(`api/Entrevista/puntuar-entrevista/${id_postulant}`, values);
   return response;
}

export const getRecruitersAvailableService = async () => {
   const response = await clientAxios<ListRecruiters>(`/api/Convocatoria/reclutadores-disponibles`);
   return response;
}

export const updateResultInductionGeneral = async (id_postulant: number, values: InductionGeneralUpdate) => {
   const response = await clientAxios.put(`/api/InduccionGeneral/actualizar-resultados-induccion-general/${id_postulant}`, values);
   return response;
}
