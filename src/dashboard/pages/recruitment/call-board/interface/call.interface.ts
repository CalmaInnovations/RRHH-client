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

export interface Postulant {
   id: number;
   nombres: string;
   apellidoPaterno: string;
   apellidoMaterno: string;
   email: string;
   dni: string;
   telefono: string;
   convocatoriaId: number;
   modalidadPracticas: string;
   institucionEducativa: string;
   carrera: string;
   direccion: string;
   pais: string;
   departamento: string;
   linkedinUrl: string;
   cartaRecomendacion: string;
   fechaRegistro: string; // Cambia a `Date` si procesas la fecha antes.
   fechaNacimiento: string; // Cambia a `Date` si procesas la fecha antes.
   cvUrl: string;
   fotoUrl: string;
   estado: string;
 }
