export interface SolicitudesRes {
   solicitudes: Solicitudes[];
   currentPage: number;
   pags: number;
   pgSize: number;
   registros: number;
}


export interface Solicitudes {
   categoria: string;
   id: number;
   colaborador: string;
   puesto: string;
   cantidad: number;
   habilidadesBlandas: string;
   conocimientosTecnicos: string;
   tipoModalidad: string;
   fechaSolicitud: string;
   fechaActualizacion: string;
   observaciones: string;
   estado: string;

}

export interface RequestUpdateValues {
   cantidad: number;
   habilidadesBlandas: string;
   conocimientosTecnicos: string
}

