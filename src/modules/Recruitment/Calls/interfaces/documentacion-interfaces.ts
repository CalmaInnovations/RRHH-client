export interface Documentations {
   postulanteId: number;
   encargadoEnvioDocsId: number;
   fechaEnvioDocs: string;
   legajoUrl: string;
   cartaPresentacion: boolean;
   cartaConfidencialidad: boolean;
   cartaCompromiso: boolean;
   documentoDNI: boolean;
   documentoCV:boolean;
   documentoHorarioPracticas: boolean;
}


export interface ApiResponse {
   documentacionPostulante: Documentations;
 }


 export interface UpdatedDocumentacion {
   cartaPresentacion: boolean;
   cartaConfidencialidad: boolean;
   cartaCompromiso: boolean;
   documentoDNI: boolean;
   documentoCV:boolean;
   documentoHorarioPracticas: boolean;
 }
