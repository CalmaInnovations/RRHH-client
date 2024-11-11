import type { Tipo } from "../../table/models/request-items";

export interface NewRequestItems {
   puesto?: string;
   cantidad?: number;
   tipo?: Tipo;
   habilidadesBlandas?: string;
   conocimientosTecnicos?: string;
   funciones?: string;
}
