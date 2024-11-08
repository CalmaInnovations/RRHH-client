export interface Row {
    id: number;
    area: string;
    reclutador_senior: string;
    reclutador_general: string;
    subarea: string;
    puesto: string;
    observaciones: string;
    restantes: number;
    tipo: "Practicante" | "Voluntario";
    fecha: Date;
    cantidad: number;
    estado: "Pendiente" | "En proceso" | "Completado";
}
