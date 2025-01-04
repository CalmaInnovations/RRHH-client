import clientAxios from "../../../../../config/client-axios"
import { SolicitudesRes } from "../interfaces/solicitud-interface";


interface PaginationParams {
   pgNum: number;
   pgSize: number;

}

export const getAllSolicitudService = async (paginationParams: PaginationParams) => {
   try {
      const { pgNum, pgSize } = paginationParams;
      const response = await clientAxios.get<SolicitudesRes>(`api/SolicitudColaborador?pgNum=${pgNum}&pgSize=${pgSize}`);
      console.log("Respuesta de getAllSolicitudService:", response.data);
      return response;
   } catch (error) {
      console.error("Error en getAllSolicitudService:", error);
      throw error;
   }
};
