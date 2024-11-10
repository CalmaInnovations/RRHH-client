import type { Row } from "../models/row";

function createData(data: Row): Row {
    return data;
}

export const rows: Row[] = [
    createData({
        id: 1,
        area: 'Recursos Humanos',
        reclutador_senior: 'Valeria',
        reclutador_general: 'Lopez',
        subarea: 'Reclutamiento',
        puesto: "Reclutador",
        tipo: "Practicante",
        fecha: new Date("2023-10-01"),
        cantidad: 5,
        restantes: 1,
        estado: "Pendiente",
        observaciones: 'Lorem ipsom Lorem ipsomLorem ipsomLorem ipsom',
    }),

    createData({
        id: 2,
        area: 'Recursos Humanos',
        reclutador_senior: 'Valeria',
        reclutador_general: 'Lopez',
        subarea: 'Reclutamiento',
        puesto: "Reclutador",
        tipo: "Practicante",
        fecha: new Date("2023-10-01"),
        cantidad: 5,
        restantes: 1,
        estado: "Pendiente",
        observaciones: 'Lorem ipsom Lorem ipsomLorem ipsomLorem ipsom',
    }),

    createData({
        id: 3,
        area: 'Recursos Humanos',
        reclutador_senior: 'Valeria',
        reclutador_general: 'Lopez',
        subarea: 'Reclutamiento',
        puesto: "Reclutador",
        tipo: "Practicante",
        fecha: new Date("2023-10-01"),
        cantidad: 5,
        restantes: 1,
        estado: "Pendiente",
        observaciones: 'Lorem ipsom Lorem ipsomLorem ipsomLorem ipsom',
    }),

];
