import type { RequestItems } from "../../../interface/request-items.model";

function createData(data: RequestItems): RequestItems {
   return data;
}

export const initialRows: RequestItems[] = [
   createData({
      id: 1,
      date: new Date("2023-10-01"),
      position: "Desarrollador Front-end",
      type: "Practicante",
      quantity: 5,
      status: "Pendiente",
      softSkills: "Ipsum cccccccs",
      technicalKnowledge: "Lo Ipsum.cccccceccccccc",
      functions: "Desarrollo Mobil"
   }),
   createData({
      id: 2,
      date: new Date("2023-11-15"),
      position: "Desarrollador Front-end",
      type: "Voluntario",
      quantity: 3,
      status: "En proceso",
      softSkills: "Ipsumssssssssssssssss",
      technicalKnowledge: "Lo Ipsums",
      functions: "Desarrollo Mobil"
   }),
   createData({
      id: 3,
      date: new Date("2023-12-05"),
      position: "Desarrollador Front-end",
      type: "Practicante",
      quantity: 2,
      status: "Completado",
      softSkills: "Lo Ipsum",
      technicalKnowledge: "Lo cLorem Ipsum.",
      functions: "Desarrollo Mobil"
   }),
   createData({
      id: 4,
      date: new Date("2024-01-10"),
      position: "Desarrollador Back-end",
      type: "Voluntario",
      quantity: 4,
      status: "Pendiente",
      softSkills: "LoLorem Ipsum",
      technicalKnowledge: "Lo cof Lorem Ipsum.",
      functions: "Desarrollo Mobil"
   }),
   createData({
      id: 5,
      date: new Date("2024-02-20"),
      position: "Desarrollador Back-end",
      type: "Practicante",
      quantity: 1,
      status: "En proceso",
      softSkills: "Lo cof Lorem Ipsum",
      technicalKnowledge: "Lo cLorem Ipsum.",
      functions: "Desarrollo Mobil" 
   }),
];
