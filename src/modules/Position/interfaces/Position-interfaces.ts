export interface PuestoRes {
    puestos: Puestos[];
    currentPage: number;
    pags: number;
    pgSize: number;
    registros: number;
 }


 export interface Puestos {
    id: number;
    nombre: string;
    areaId: number;
 }
