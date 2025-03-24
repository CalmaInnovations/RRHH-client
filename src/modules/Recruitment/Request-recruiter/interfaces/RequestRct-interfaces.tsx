export interface SolicitudesRCTRes {
    solicitudes: SolicitudesRCT[];
    currentPage: number;
    pags: number;
    pgSize: number;
    registros: number;
 }


 export interface SolicitudesRCT {
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
