import { RequestItems, Type, Status } from "../models/request-items.model";

interface apiData {
   id: number;
   date: Date;
   position: string;
   type: Type;
   quantity: number;
   status: Status;
   softSkills: string;
   technicalKnowledge: string;
   functions: string;
}

export function requestItemsAdapter(apiData: apiData): RequestItems {
   return {
      id: apiData.id,
      date: apiData.date ? new Date(apiData.date) : undefined,
      position: apiData.position || undefined,
      type: isValidType(apiData.type) ? apiData.type : undefined,
      quantity: apiData.quantity || undefined,
      status: isValidStatus(apiData.status) ? apiData.status : undefined,
      softSkills: apiData.softSkills || undefined,
      technicalKnowledge: apiData.technicalKnowledge || undefined,
      functions: apiData.functions || undefined,
   };
}

function isValidType(value: Type): value is Type {
   return ["Practicante", "Voluntario"].includes(value);
}

function isValidStatus(value: Status): value is Status {
   return ["Pendiente", "En proceso", "Completado"].includes(value);
}
