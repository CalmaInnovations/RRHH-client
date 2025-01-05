import { useEffect, useState } from "react";
import { Collaborator } from "../interface/request-items.model";
import {
   createColaboradorService,
   getCollaborator,
} from "../components/table/service/request-service";

export const useCollaborator = () => {
   const [cards, setCards] = useState<Collaborator[]>([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getCollaborators = async () => {
         try {
            setLoading(true);
            const collaborators = await getCollaborator();
            setCards(collaborators);
         } catch (error) {
            console.error("Error al obtener colaboradores:", error);
         } finally {
            setLoading(false);
         }
      };
      getCollaborators();
   }, []);

   const updateCollaborator = async (
      data: Collaborator,
      editId: number | null
   ) => {
      if (editId) {
         setCards((prev) =>
            prev.map((card) =>
               card.id === editId ? { ...card, ...data } : card
            )
         );
      }
   };

   const postCollaborator = async (values: Collaborator) => {
      try {
         setLoading(true);
         await createColaboradorService(values);
      } catch (error) {
         console.error("Error al crear un colaborador:", error);
      } finally {
         setLoading(false);
      }
   };

   return {
      cards,
      loading,
      setCards,
      updateCollaborator,
      postCollaborator,
   };
};
