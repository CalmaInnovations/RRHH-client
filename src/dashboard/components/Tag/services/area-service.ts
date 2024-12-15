import clientAxios from "../../../../config/client-axios";
import { Area } from "../interface/area-interface";

export const getAllAreaService = async () => {
   try {
      const response = await clientAxios.get<Area[]>('api/Convocatoria/areas');
      console.log("Respuesta de getAllAreaService:", response.data);
      return response.data;
   } catch (error) {
      console.error("Error en getAllAreaService:", error);
      throw error;
   }
};
