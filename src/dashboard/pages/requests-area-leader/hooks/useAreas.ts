import { useEffect, useState } from "react";

import {
   getArea,
   getPosition,
   getSubArea,
   getCollaboratorModality,
} from "../components/table/service/request-service";

export const useAreas = () => {
   const [areas, setAreas] = useState([]);
   const [subAreas, setsubAreas] = useState([]);
   const [position, setPosition] = useState([]);
   const [collaboratorModality, setCollaboratorModality] = useState<string[]>([]);
   const [Loading, setLoading] = useState(false);

   const fetchAreas = async () => {
      try {
         setLoading(true);
         const response = await getArea();
         setAreas(response);
      } catch (error) {
         console.log("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchAreas();
   }, []);

   const fetchSubAreas = async () => {
      try {
         setLoading(true);
         const response = await getSubArea();
         setsubAreas(response);
      } catch (error) {
         console.log("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchSubAreas();
   }, []);

   const fetchPosition = async () => {
      try {
         setLoading(true);
         const response = await getPosition();
         setPosition(response);
      } catch (error) {
         console.log("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchPosition();
   }, []);

   const fetchCollaboratorModality = async () => {
      try {
         setLoading(true);
         const response = await getCollaboratorModality();
         setCollaboratorModality(response);
      } catch (error) {
         console.log("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchCollaboratorModality();
   }, []);

   return { areas, subAreas, position, collaboratorModality, Loading };
};
