export interface CallRes {
   convocatorias: Call[];
   currentPage: number;
   pags: number;
   pgSize: number;
   registros: number;
}

export interface CallDetail {
   idConvocatoria: number;
   nombreArea: string;
   nombreSubArea: string;
   nombrePuesto: string;
   reclutadorSenior: string;
   reclutadorGeneral: string;
   modalidad: string;
   cantidadSolicitada: number;
   cantidadRestante: number;
   estadoSolicitud: string;
   observaciones: string;
   fechaSolicitud: string;
   fechaActualizacion: string;
   fechaPublicacion: string;
   beneficios: string;
}

export interface Call {
   idConvocatoria: number;
   nombreArea: string;
   reclutadorSenior: number;
   reclutadorGeneral: number;
   nombreSubArea: string;
   nombrePuesto: string;
   cantidad: number;
   cantidadRestante: string
   modalidad: string;
   estadoSolicitud: string;
   fechaSolicitud: string;
   fechaPublicacion: string;
   observaciones: string
}

export interface RecruiterRes {
   reclutadoresGeneral: Recruiter[];
   reclutadoresSenior: Recruiter[];
}

export interface Recruiter {
   id: number;
   nombre: string;
}

export interface RequestUpdateReq {
   reclutadorSeniorId: number;
   reclutadorGeneralId: number;
   estado: string;
   observaciones: string;
   beneficios: string;
   fechaPublicacion: string
}


