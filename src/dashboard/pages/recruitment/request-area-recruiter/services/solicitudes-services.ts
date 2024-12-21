import clientAxios from "../../../../../config/client-axios"
import { SolicitudesRes } from "../interfaces/solicitud-interface";


export const getAllSolicitudService = async () => {
   try {
      const response = await clientAxios.get<SolicitudesRes>('api/SolicitudColaborador');
      console.log("Respuesta de getAllSolicitudService:", response.data);
      return response;
   } catch (error) {
      console.error("Error en getAllSolicitudService:", error);
      throw error;
   }
};
