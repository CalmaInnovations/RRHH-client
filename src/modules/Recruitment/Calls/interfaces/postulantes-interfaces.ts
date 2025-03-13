export interface Persona {
   nombres: string;
   apellidoPaterno: string;
   apellidoMaterno: string;
   email: string;
   dni: string;
   telefono: string;
   institucionEducativa: string;
   modalidadPracticas?:string;
   carrera: string;
   direccion: string;
   pais: string;
   departamento: string;
   estado?: string;
   convocatoriaId?:number;
 }

 export interface Convocatoria {
   id: number;
 }

 export interface Postulante {
   id: number;
   modalidadPracticas: string;
   personaId: number;
   convocatoriaId: number;
   persona: Persona;
   convocatoria: Convocatoria;
 }

 export interface PostulantesRes {
   pags: number;
   pgNum: number;
   pgSize: number;
   orderBy: string;
   orderDirection: string;
   postulantes: Postulante[];
 }
