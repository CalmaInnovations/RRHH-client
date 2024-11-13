export type Type = "Practicante" | "Voluntario";
export type Status = "Pendiente" | "En proceso" | "Completado";

export interface RequestItems {
   id?: number;
   date?: Date;
   position?: string;
   type?: Type;
   quantity?: number;
   status?: Status;

   softSkills?: string;
   technicalKnowledge?: string;
   functions?: string;
}
