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
