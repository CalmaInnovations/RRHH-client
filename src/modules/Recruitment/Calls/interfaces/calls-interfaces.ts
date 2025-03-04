export interface RecruiterAvailableRes {
    reclutadoresGeneral: RecruiterAv[];
    reclutadoresSenior: RecruiterAv[];
 }

 export interface RecruiterAv {
    id: number;
    nombre: string;
 }



 export interface CallRes {
   convocatorias: CallDetail[];
   currentPage: number;
   pags: number;
   pgSize: number;
   registros: number;
}

export interface CallDetail {
   idConvocatoria: number;
   nombreArea: string;
   reclutador: string;
   fechaSolicitud: string;
   tipo_reclutador: string;
   modalidad: string;
   cantidadSolicitada: number;
   cantidadRestante: number;
   estadoSolicitud: string;
   observaciones: string;
   fechaActualizacion: string;
   fechaPublicacion: string;
}
