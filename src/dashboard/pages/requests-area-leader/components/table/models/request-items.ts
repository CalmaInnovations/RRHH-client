export interface RequestItems {
   id: number;
   fecha: Date;
   puesto: string;
   tipo: "Practicante" | "Voluntario";
   cantidad: number;
   estado: "Pendiente" | "En proceso" | "Completado";
}
