export interface CallRes {
   convocatorias: Call[];
   currentPage: number;
   pags: number;
   pgSize: number;
   registros: number;
}

export interface Call {
   idConvocatoria: number;
   nombreArea: string;
   reclutadorSenior: string;
   reclutadorGeneral: string;
   nombreSubArea: string;
   nombrePuesto: string;
   cantidad: number;
   estadoSolicitud: string;
   fechaSolicitud: string;
   fechaPublicacion: string;
}
