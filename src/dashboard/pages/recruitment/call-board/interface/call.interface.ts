import { UniqueIdentifier } from "@dnd-kit/core";

export interface CallInterface {
   id: UniqueIdentifier;
   title: string;
   step?: string;
   items: Postulant[];
}

export interface ColumnPostulant {
   id: string,
   title: string,
   items: Postulant[],
}

export interface PostulantDataComplete {
   postulante: Postulant;
   entrevista:Entrevista;
   induccionGeneral: null;
   induccionArea: null;
   documentacion: null;

}

export interface Postulant {
   id?: number;
   nombres: string;
   apellidoPaterno?: string;
   apellidoMaterno?: string;
   email?: string;
   dni: string;
   telefono: string;
   convocatoriaId?: number;
   modalidadPracticas?: string;
   institucionEducativa?: string;
   carrera: string;
   direccion: string;
   pais: string;
   departamento: string;
   linkedinUrl?: string;
   cartaRecomendacion?: string;
   fechaNacimiento?: string;
   cvUrl?: string;
   fotoUrl?: string;
   estado?: "Postulante" | "Entrevista" | "Induccion general"| "Colaborador";
 }

export interface Entrevista {
   postulanteId: number;
   entrevistadorId: number;
   fechaEntrevista: string;
   puntaje: number;
   comentarios: string;
}

 export interface CreatePostulant {

 }
