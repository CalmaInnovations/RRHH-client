import clientAxios from "../../../../../../config/client-axios";
import { CollaboratorPost } from "../../../interface/request-items.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createColaboradorService = async (values: CollaboratorPost) => {
   try {
      const response = await clientAxios.post(
         "/api/SolicitudColaborador",
         JSON.stringify(values),
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
      console.log("Envío de solicitud exitoso:", response.data);
      return response.data;
   } catch (error) {
      console.error("Error en envío de solicitud:", error);
      throw error;
   }
};

export const CreateCollaborator = createApi({
   reducerPath: "apiCreateCollaborator",
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:8080",
   }),
   endpoints: (builder) => ({
      getSolicitudCollaborators: builder.query<CollaboratorPost[], void>({
         query: () => "/api/SolicitudColaborador",
      }),
      postSolicitudCollaborator: builder.mutation<CollaboratorPost, Partial<CollaboratorPost>>({
         query: (newRequest) => ({
            url: "/api/SolicitudColaborador",
            method: "POST",
            body: newRequest,
         }),
      }),
   }),
});

export const { useGetSolicitudCollaboratorsQuery, usePostSolicitudCollaboratorMutation } = CreateCollaborator;

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
/*
export const getSubArea = async () => {
   try {
      const response = await clientAxios.get("/api/SubArea");
      return response.data.subAreas;
   } catch (error) {
      console.log("Error:", error);
   }
};
*/
export const getPosition = async () => {
   try {
      const response = await clientAxios.get("/api/Puesto");
      return response.data.puestos;
   } catch (error) {
      console.log("Error:", error);
   }
};

export const getCollaboratorModality = async () => {
   try {
      const response = await clientAxios.get("/api/SolicitudColaborador");

      const modalidades = response.data.solicitudes
         .map((solicitud: any) => solicitud.tipoModalidad)
         .filter((value: any, index: number, self: any[]) => value && self.indexOf(value) === index);

      return modalidades;
   } catch (error) {
      console.log("Error:", error);
      return [];
   }
};


