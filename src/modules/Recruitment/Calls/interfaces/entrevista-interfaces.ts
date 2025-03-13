export interface EntrevistaCreate {
   postulanteId: number;
   fechaEntrevista: string;
   horaEntrevista: string;
}


export interface EntrevistaRes {
   entrevistas: Entrevista[];
   currentPage: number;
   pags: number;
   pgSize: number;
   registros: number;
}

export interface Entrevista {
   idEntrevista: number;
   convocatoria: number;
   entrevistador: string;
   postulanteId: number;
   postulante: string;
   fechaEntrevista: string;
   horaEntrevista: string;
   resultado: boolean;
   comentarios: string;
}

export interface EntrevistaUpdate {
   postulanteId: number;
   fechaEntrevista: string;
   horaEntrevista: string;
}

