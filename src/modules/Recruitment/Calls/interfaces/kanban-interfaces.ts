export interface Task {
   id: string;
   nombres: string;
   apellido: string;
   email: string;
   modalidad: string;
   estado:string | undefined;
}

export interface ColumnType {
   id: string;
   title: string;
   tasks: Task[];
}


export interface NewColumns {
   postulacion: Task[];
   entrevista: Task[];
   documentacion: Task[];
   onboarding: Task[];
   colaborador: Task[];
}
