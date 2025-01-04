import { useEffect, useState } from "react";
import { CollaboratorGet } from "../interface/request-items.model";
import { getCollaborator } from "../components/table/service/request-service";

export const useCollaborator = () => {
   const [cards, setCards] = useState<CollaboratorGet[]>([]);
   const [Loading, setLoading] = useState(false);

   const getCollaborators = async () => {
      try {
         setLoading(true);
      const collaborators = await getCollaborator();
      setCards(collaborators);
      } catch (error) {
         console.error("Error al obtener colaboradores:", error);
      }finally{
         setLoading(false);
      }
      
   };

   useEffect(() => {
      
      getCollaborators();
   }, []);

   const updateCollaborator = async (
      data: CollaboratorGet,
      editId: number | null
   ) => {
      if (editId) {
         setCards((prev) =>
            prev.map((card) =>
               card.id === editId ? { ...card, ...data } : card
            )
         );
      } else {
         setCards((prev) => [...prev, data]);
      }
   };

   return { cards,Loading, setCards, getCollaborators, updateCollaborator };
};
