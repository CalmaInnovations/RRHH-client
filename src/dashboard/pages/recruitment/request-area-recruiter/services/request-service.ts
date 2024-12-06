import clientAxios from "../../../../../config/client-axios"
import { CallRes, RecruiterRes, RequestUpdateReq } from "../interfaces/calls-interface";

// export const getCallsService = async () => {
//    const response = await clientAxios.get<CallRes>('api/Convocatoria')
//    return response;
// }

export const getCallsService = async () => {
   try {
      const response = await clientAxios.get<CallRes>('api/Convocatoria');
      console.log("Respuesta de getCallsService:", response.data);
      return response;
   } catch (error) {
      console.error("Error en getCallsService:", error);
      throw error;
   }
};

export const getRecruitersAvailableService = async () => {
   const response = await clientAxios.get<RecruiterRes>('api/Convocatoria/reclutadores-disponibles');
   return response

}

export const updateRequestService = async (id_request: number, request_update: RequestUpdateReq) => {
   const response = await clientAxios.put(`api/Convocatoria/${id_request}`, request_update)

   return response
}
