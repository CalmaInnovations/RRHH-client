export type Tipo = "Practicante" | "Voluntario";
export type Estado = "Pendiente" | "En proceso" | "Completado";

export interface RequestItems {
   id: number;
   fecha: Date;
   puesto: string;
   tipo: Tipo;
   cantidad: number;
   estado: Estado;
}
