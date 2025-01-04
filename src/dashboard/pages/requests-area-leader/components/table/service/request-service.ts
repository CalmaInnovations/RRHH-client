import clientAxios from "../../../../../../config/client-axios";
import { Collaborator } from "../../../interface/request-items.model";

export const createColaboradorService = async (values: Collaborator) => {
   try {
      const response = await clientAxios.post(
         "/api/SolicitudColaborador",
         values, 
         {
            headers: {
               "Content-Type": "application/json", 
            }
         }
      );
      console.log("Envio de solicitud exitoso:", response.data);
      return response.data;
   } catch (error) {
      console.error("Error en envio de solicitud:", error);
      throw error;
   }
};

export const getCollaborator = async () => {
   try {
      const response = await clientAxios.get("/api/SolicitudColaborador");
      return response.data.solicitudes;

   } catch (error) {
      console.log("Error:", error);
   }
};

export const getArea = async () => {
   try {
      const response = await clientAxios.get("/api/Area");
      return response.data.areas;
   } catch (error) {
      console.log("Error:", error);
   }
};

export const getSubArea = async () => {
   try {
      const response = await clientAxios.get("/api/SubArea");
      return response.data.subAreas;
   } catch (error) {
      console.log("Error:", error);
   }
};

export const getPosition = async () => {
   try {
      const response = await clientAxios.get("/api/Puesto");
      return response.data.puestos;
   } catch (error) {
      console.log("Error:", error);
   }
};
