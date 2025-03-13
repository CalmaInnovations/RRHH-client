import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Column from "../components/Kanban/Column";
import {
   useGetPostulantesQuery,
   useUpdatePostulanteEstadoMutation,
} from "../services/postulantes-api";
import Button from "@/shared/components/Button";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { ColumnType, NewColumns } from "../interfaces/kanban-interfaces";
import { useGetConvocatoriaByIdQuery } from "../services/calls-api";
import { useDispatch } from "react-redux";
import { openModal } from "@/shared/slices/modalSlice";
import ModalPostulante from "../components/Kanban/Modals/Postulantes/ModalPostulante";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Kanban: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const convocatoriaId = Number(id);

   const dispatch = useDispatch();

   const { data } = useGetPostulantesQuery();

   const { data: DetailConv } = useGetConvocatoriaByIdQuery(Number(id));
   const [updateEstado] = useUpdatePostulanteEstadoMutation();

   const [columns, setColumns] = useState<ColumnType[]>([
      { id: "postulacion", title: "Postulaciones", tasks: [] },
      { id: "entrevista", title: "Entrevista", tasks: [] },
      { id: "documentacion", title: "Documentacion", tasks: [] },
      { id: "onboarding", title: "Onboarding", tasks: [] },
      { id: "colaborador", title: "Colaboradores", tasks: [] },
   ]);

   // Mapeo de estados válidos para el backend
   const estadoMap = {
      postulacion: "Postulaciones",
      entrevista: "Entrevista",
      documentacion: "Documentación",
      onboarding: "Onboarding",
      colaborador: "Colaboradores",
   };

   // Cargar postulantes en la primera columna cuando se obtienen datos de la API
   useEffect(() => {
      if (data?.postulantes) {
         // Inicializar columnas vacías
         const newColumns: NewColumns = {
            postulacion: [],
            entrevista: [],
            documentacion: [],
            onboarding: [],
            colaborador: [],
         };

         // Distribuir postulantes según su estado
         data.postulantes
            //en esta parte se hace un filtro comparando el id de la convocatoria con el id q esta elanzado con el postulante ...para q asi nos muestre solo los postulante de tal convocatoria
            .filter(
               (postulante) => postulante.convocatoriaId === convocatoriaId
            )
            .forEach((postulante) => {
               const task = {
                  id: String(postulante.id),
                  nombres: postulante.persona.nombres,
                  apellido: postulante.persona.apellidoPaterno,
                  email: postulante.persona.email,
                  modalidad: postulante.modalidadPracticas,
                  estado: postulante.persona.estado,
               };

               const estadoKey =
                  (Object.keys(estadoMap).find(
                     (key) =>
                        estadoMap[
                           key as keyof typeof estadoMap
                        ].toLowerCase() ===
                        postulante.persona.estado?.toLowerCase()
                  ) as keyof NewColumns) || "postulacion";

               newColumns[estadoKey].push(task);
            });

         // Actualizar columnas en el estado
         setColumns((prevColumns) =>
            prevColumns.map((col) => ({
               ...col,
               tasks: newColumns[col.id as keyof NewColumns] || [],
            }))
         );
      }
   }, [data, convocatoriaId]);

   const handleDragEnd = async (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over) return;

      const sourceColumnId = active.data.current?.columnId;
      const destinationColumnId = over.id;

      if (sourceColumnId === destinationColumnId) return;

      setColumns((prevColumns) => {
         const sourceColumn = prevColumns.find(
            (col) => col.id === sourceColumnId
         );
         const destinationColumn = prevColumns.find(
            (col) => col.id === destinationColumnId
         );

         if (!sourceColumn || !destinationColumn) return prevColumns;

         const taskToMove = sourceColumn.tasks.find(
            (task) => task.id === active.id
         );
         if (!taskToMove) return prevColumns;

         return prevColumns.map((col) => {
            if (col.id === sourceColumnId) {
               return {
                  ...col,
                  tasks: col.tasks.filter((task) => task.id !== active.id),
               };
            }
            if (col.id === destinationColumnId) {
               return {
                  ...col,
                  tasks: [
                     ...col.tasks,
                     { ...taskToMove, columnId: destinationColumnId },
                  ],
               };
            }
            return col;
         });
      });

      // **Actualizar en el backend**
      try {
         await updateEstado({
            id: Number(active.id), // ID del postulante
            estado: String(
               estadoMap[destinationColumnId as keyof typeof estadoMap] ||
                  destinationColumnId
            ), // Nuevo estado basado en la columna destino
         }).unwrap();
         alert("Se cambio el estado");
      } catch (error) {
         const err = error as FetchBaseQueryError;
         if (err.status === "PARSING_ERROR" && err.originalStatus === 400) {
            console.warn("Error 400:", err.data); // 🟢 Muestra el mensaje del backend
            alert("No puedes retroceder un estado")
            setTimeout(()=>{
               window.location.reload();
            },2000)
         }
      }
   };

   return (
      <div className="p-5 bg-light rounded-md">
         <DndContext onDragEnd={handleDragEnd}>
            <div className="mb-5">
               <div className="mb-6">
                  <h1 className="text-3xl font-semibold text-primary">
                     {DetailConv?.nombrePuesto}
                  </h1>
                  <h2 className="text-lg font-semibold text-grey-dark-ligth">
                     {DetailConv?.modalidad}
                  </h2>
               </div>
               <div className="flex justify-between">
                  <div>
                     <h1 className="font-semibold text-dark">Subárea</h1>
                     <h2 className="text-grey-dark-ligth">
                        {DetailConv?.nombreArea}
                     </h2>
                  </div>
                  <div>
                     <h1 className="font-semibold text-dark">
                        Habilidades blandas
                     </h1>
                     <h2 className="text-grey-dark-ligth">
                        Trabajo en equipo y comunicación
                     </h2>
                  </div>
                  <div>
                     <h1 className="font-semibold text-dark">
                        Habilidades técnicas
                     </h1>
                     <h2 className="text-grey-dark-ligth">
                        HTML, CSS, Javascript, React, Tailwind
                     </h2>
                  </div>
                  <div>
                     <h1 className="font-semibold text-dark">Cantidad</h1>
                     <h2 className="text-grey-dark-ligth">
                        {DetailConv?.cantidadSolicitada}
                     </h2>
                  </div>
               </div>
            </div>

            {/* KANBAN */}
            <div className="grid grid-cols-5 gap-8">
               {columns.map((column) => (
                  <div key={column.id} className="flex flex-col gap-y-4">
                     <Column column={column} />
                     {column.id === "postulacion" && (
                        <Button
                           icon={<FaPlus />}
                           onClick={() =>
                              dispatch(openModal("ModalPostulante"))
                           }
                        >
                           Añadir Postulante
                        </Button>
                     )}
                  </div>
               ))}
            </div>
         </DndContext>

         <ModalPostulante convocatoriaId={convocatoriaId} />
      </div>
   );
};

export default Kanban;
