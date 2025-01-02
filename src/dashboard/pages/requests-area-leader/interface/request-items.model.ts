export type Type = "Practicante" | "Voluntario";
export type Status = "Pendiente" | "En proceso" | "Completado";

export interface CollaboratorPost {
   colaboradorLiderId: number;
   puestoId: number;
   cantidad: number;
   habilidadesBlandas: string;
   conocimientosTecnicos: string;
   tipoModalidad: string;
   observaciones: string;
   beneficios: string;
}

export interface CollaboratorGet {
   id?: number;
   colaborador?: string;
   puesto?: string;
   cantidad?: number;
   habilidadesBlandas?: string;
   conocimientosTecnicos?: string;
   tipoModalidad?: string;
   fechaSolicitud?: string;
   fechaActualizacion?: string;
   observaciones?: string;
   estado?: string;
}

export interface Area {
   id?: number;
   nombre?: string;
}

export interface SubArea {
   id: number;
   nombre: string;
   areaId: number;
}
