import { useEffect, useState } from "react";

import {
   getArea,
   getPosition,
   getSubArea,
} from "../components/table/service/request-service";

export const useAreas = () => {
   const [areas, setAreas] = useState([]);
   const [subAreas, setsubAreas] = useState([]);
   const [position, setPosition] = useState([]);
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


   return { areas, fetchAreas, fetchSubAreas, subAreas, Loading, fetchPosition, position };
};
