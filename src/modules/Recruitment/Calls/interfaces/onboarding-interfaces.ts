export interface Onboarding {
   nombrePostulante: string;
   nombreEncargado: string;
   postulanteId: number;
   encargadoId: number;
   fechaHoraInduccion: string;
   realizoInduccion: boolean;
   contrato: boolean;
   cartaCompromiso: boolean;
   codigoEtica: boolean;
   linkMeet: string;
   observaciones: string;
}

export interface OnboardingRes {
   currentPage: number;
   pags: number;
   pgSize: number;
   registros: number;
   inducciones: Onboarding[];
}


export interface ColaboradorOnboarding {
   id: number;
   nombreCompleto: string;
   codigoColaborador: string;
   puesto: string;
   lider: string;
   fechaInicio: string;
   fechaFin: string | null;
}


export interface OnboardingUdate {
   postulanteId: number;
   encargadoId: number;
   fechaHoraInduccion: string;
   realizoInduccion: boolean;
   contrato: boolean;
   cartaCompromiso: boolean;
   codigoEtica: boolean;
   linkMeet: string;
   observaciones: string;
}
