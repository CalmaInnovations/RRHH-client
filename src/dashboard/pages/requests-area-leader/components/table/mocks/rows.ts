import type { Row } from "../models/row";

function createData(data: Row): Row {
    return data;
}

export const rows: Row[] = [
    createData({
        id: 1,
        fecha: new Date("2023-10-01"),
        puesto: "Desarrollador Front-end",
        tipo: "Practicante",
        cantidad: 5,
        estado: "Pendiente",
    }),
    createData({
        id: 2,
        fecha: new Date("2023-11-15"),
        puesto: "Desarrollador Front-end",
        tipo: "Voluntario",
        cantidad: 3,
        estado: "En proceso",
    }),
    createData({
        id: 3,
        fecha: new Date("2023-12-05"),
        puesto: "Desarrollador Front-end",
        tipo: "Practicante",
        cantidad: 2,
        estado: "Completado",
    }),
    createData({
        id: 4,
        fecha: new Date("2024-01-10"),
        puesto: "Desarrollador Back-end",
        tipo: "Voluntario",
        cantidad: 4,
        estado: "Pendiente",
    }),
    createData({
        id: 5,
        fecha: new Date("2024-02-20"),
        puesto: "Desarrollador Back-end",
        tipo: "Practicante",
        cantidad: 1,
        estado: "En proceso",
    }),
];
