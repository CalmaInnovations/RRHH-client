import clientAxios from "../../../../../config/client-axios";
import {  CallDetail } from "../../request-area-recruiter/interfaces/calls-interface";
import { Postulant } from "../interface/call.interface";

export const getCallByIdService = async (id_call: number) => {
   const response = await clientAxios.get<CallDetail>(`api/Convocatoria/${id_call}`)
   return response;
}

export const getPostulantsService = async (type: string = "Postulante") => {
   const response = await clientAxios.get<Postulant[]>(`api/Postulante/estado/${type}`)

   return response
}
