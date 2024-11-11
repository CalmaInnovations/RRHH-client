import type { RequestItems } from "../models/request-items";

function createData(data: RequestItems): RequestItems {
   return data;
}

export const rows: RequestItems[] = [
   createData({
      id: 1,
      date: new Date("2023-10-01"),
      position: "Desarrollador Front-end",
      type: "Practicante",
      quantity: 5,
      status: "Pendiente",
   }),
   createData({
      id: 2,
      date: new Date("2023-11-15"),
      position: "Desarrollador Front-end",
      type: "Voluntario",
      quantity: 3,
      status: "En proceso",
   }),
   createData({
      id: 3,
      date: new Date("2023-12-05"),
      position: "Desarrollador Front-end",
      type: "Practicante",
      quantity: 2,
      status: "Completado",
   }),
   createData({
      id: 4,
      date: new Date("2024-01-10"),
      position: "Desarrollador Back-end",
      type: "Voluntario",
      quantity: 4,
      status: "Pendiente",
   }),
   createData({
      id: 5,
      date: new Date("2024-02-20"),
      position: "Desarrollador Back-end",
      type: "Practicante",
      quantity: 1,
      status: "En proceso",
   }),
];
