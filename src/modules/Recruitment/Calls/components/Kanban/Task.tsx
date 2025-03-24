import React, { useMemo, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import ModalEditPostulante from "./Modals/Postulantes/ModalEditPostulante";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { openModalKanban } from "../../slices/modalkanbanSlice";
import ModalDocAdd from "./Modals/Documentacion/ModalDocAdd";
import ModalOnbAdd from "./Modals/Onboarding/ModalOnbAdd";
import ModalColAdd from "./Modals/Colaboradores/ModalColAdd";
import { useGetEntrevistasQuery } from "../../services/entrevista-api";
import ModalEntrevistaEdit from "./Modals/Entrevista/ModalEntrevistaEdit";
import ModalEntrevista from "./Modals/Entrevista/ModalEntrevista";
import ModalEliminarEntrevista from "./Modals/Entrevista/ModalEliminarEntrevista";
import ModalEliminarPostulante from "./Modals/Postulantes/ModalEliminarPostulante";
import { useGetOnboardingsQuery } from "../../services/onboarding-api";
import ModalEditOnb from "./Modals/Onboarding/ModalEditOnb";
import { useGetDocumentationsQuery } from "../../services/documentation-api";
import ModalEditDoc from "./Modals/Documentacion/ModalEditDoc";

interface TaskProps {
   task: {
      id: string;
      nombres: string;
      apellido: string;
      email: string;
      estado: string | undefined;
      modalidad: string;
   };
   columnId: string;
}
const Task: React.FC<TaskProps> = ({ task, columnId }) => {
   const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

   const dispatch = useDispatch();

   const { activeModalKanban, modalType } = useSelector(
      (state: RootState) => state.modalKanban
   );

   const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: task.id,
      data: { columnId },
      disabled: activeModalKanban === task.id,
   });

   const { data: getAllEntrevista } = useGetEntrevistasQuery();
   const { data: getAllOnboarding } = useGetOnboardingsQuery();
   const { data: getAllDocumentation } = useGetDocumentationsQuery();

   const entrevistasPostulante = useMemo(() => {
      return getAllEntrevista?.entrevistas.filter(
         (entrevista) => entrevista?.postulanteId === Number(task?.id)
      );
   }, [getAllEntrevista, task?.id]);

   const onboardingsPostulante = useMemo(() => {
      return getAllOnboarding?.inducciones.filter(
         (onboarding) => onboarding?.postulanteId === Number(task?.id)
      );
   }, [getAllOnboarding]);

   const documentationsPostulante = useMemo(() => {
      return getAllDocumentation?.filter(
         (documentation) => documentation?.postulanteId === Number(task?.id)
      );
   }, [getAllDocumentation]);


   const handleOpenModal = (event: React.MouseEvent, type: string) => {
      event.stopPropagation(); // 🔹 Evita interferencias con el drag
      console.log("ID del postulante:", task.id);
      dispatch(openModalKanban({ id: task.id, type }));
      setActiveDropdown(false);
   };

   const handleOpenModalDeleted = (event: React.MouseEvent, type: string) => {
      event.stopPropagation(); // 🔹 Evita interferencias con el drag
      dispatch(openModalKanban({ id: task.id, type }));
      setActiveDropdown(false);
   };

   const toggleDropdown = () => {
      setActiveDropdown(!activeDropdown);
   };

   return (
      <div
         ref={setNodeRef}
         {...listeners}
         {...attributes}
         style={{
            padding: "8px",
            margin: "5px 0",
            cursor: activeModalKanban === task.id ? "default" : "grab",
            transform: transform
               ? `translate(${transform.x}px, ${transform.y}px)`
               : undefined,
         }}
         className="bg-light shadow-lg rounded-md"
      >
         <div className="flex justify-between">
            <h3 className="text-dark">
               {task.nombres} {task.apellido}
            </h3>
            <div className="relative">
               <PiDotsThreeOutlineVerticalFill
                  className="cursor-pointer"
                  onMouseDown={toggleDropdown}
               />
               {activeDropdown && (
                  <div className="absolute top-7 -right-14 bg-light py-2 shadow-lg gap-y-2 rounded-md z-10 w-48 border border-drop-border">
                     {task.estado === "Postulaciones" && (
                        <>
                           <h1
                              className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                              onMouseDown={(e) => handleOpenModal(e, "editar")}
                           >
                              Editar Postulante
                           </h1>
                           <h1
                              className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                              onMouseDown={(e) =>
                                 handleOpenModalDeleted(
                                    e,
                                    "eliminar_postulante"
                                 )
                              }
                           >
                              Eliminar Postulante
                           </h1>
                        </>
                     )}

                     {task.estado === "Entrevista" && (
                        <>
                           <h1
                              className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                              onMouseDown={(e) =>
                                 handleOpenModal(
                                    e,
                                    entrevistasPostulante?.length
                                       ? "editar_entrevista"
                                       : "entrevista"
                                 )
                              }
                           >
                              {entrevistasPostulante?.length
                                 ? "Editar Entrevista"
                                 : "Agregar Entrevista"}
                           </h1>
                           {entrevistasPostulante?.length ? (
                              <h1
                                 className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                                 onMouseDown={(e) =>
                                    handleOpenModalDeleted(
                                       e,
                                       "eliminar_entrevista"
                                    )
                                 }
                              >
                                 Eliminar Entrevista
                              </h1>
                           ) : (
                              <></>
                           )}
                        </>
                     )}

                     {task.estado === "Documentación" && (
                        <>
                           <h1
                              className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                              onMouseDown={(e) =>
                                 handleOpenModal(
                                    e,
                                    documentationsPostulante?.length
                                       ? "editar_documentacion"
                                       : "documentacion"
                                 )
                              }
                           >
                              {documentationsPostulante?.length
                                 ? "Editar Documentos"
                                 : " Agregar Documentos"}
                           </h1>
                           {/* <h1 className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark">
                              Descartar
                           </h1> */}
                        </>
                     )}

                     {task.estado === "Onboarding" && (
                        <>
                           <h1
                              className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                              onMouseDown={(e) =>
                                 handleOpenModal(
                                    e,
                                    onboardingsPostulante?.length
                                       ? "editar_onboarding"
                                       : "onboarding"
                                 )
                              }
                           >
                              {onboardingsPostulante?.length
                                 ? "Editar onboarding"
                                 : "Agregar onboarding"}
                           </h1>
                           {/* <h1 className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark">
                              Descartar
                           </h1> */}
                        </>
                     )}

                     {task.estado === "Colaboradores" && (
                        <>
                           <h1
                              className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark"
                              onMouseDown={(e) =>
                                 handleOpenModal(e, "colaboradores")
                              }
                           >
                              Agregar Colaborador
                           </h1>
                           {/* <h1 className="p-2 text-sm cursor-pointer hover:bg-hover-grey text-dark">
                              Descartar
                           </h1> */}
                        </>
                     )}
                  </div>
               )}
            </div>

            {/* test */}
         </div>

         <p className="text-sm text-grey-dark-ligth mb-1">{task.email}</p>
         {task.modalidad === "Practicante profesional" ? (
            <span className="text-xs font-semibold text-tx-warning bg-backg-warning p-1 w-full">
               {task.modalidad}
            </span>
         ) : (
            <span className="text-xs font-semibold text-primary bg-primary-bg p-1 w-full">
               {task.modalidad}
            </span>
         )}

         {/* MODALES */}
         {activeModalKanban === task.id && modalType === "editar" && (
            <ModalEditPostulante postulanteId={task.id} />
         )}
         {activeModalKanban === task.id &&
            (modalType === "editar_entrevista" ? (
               <ModalEntrevistaEdit
                  postulanteId={task.id}
                  entrevistaId={Number(
                     entrevistasPostulante?.[0]?.idEntrevista
                  )}
               />
            ) : modalType === "entrevista" ? (
               <ModalEntrevista postulanteId={task.id} />
            ) : null)}

         {activeModalKanban === task.id &&
         modalType === "editar_documentacion" ? (
            <ModalEditDoc postulanteId={task.id} />
         ) : modalType === "documentacion" ? (
            <ModalDocAdd postulanteId={task.id}/>
         ) : null}

         {activeModalKanban === task.id && modalType === "editar_onboarding" ? (
            <ModalEditOnb postulanteId={task.id} />
         ) : modalType === "onboarding" ? (
            <ModalOnbAdd postulanteId={task.id} />
         ) : null}
         {activeModalKanban === task.id && modalType === "colaboradores" && (
            <ModalColAdd />
         )}

         {/* MODALES DE ELIMINACIONES*/}
         {activeModalKanban === task.id &&
            modalType === "eliminar_entrevista" && (
               <ModalEliminarEntrevista
                  entrevistaId={Number(
                     entrevistasPostulante?.[0]?.idEntrevista
                  )}
               />
            )}
         {activeModalKanban === task.id &&
            modalType === "eliminar_postulante" && (
               <ModalEliminarPostulante postulanteId={task.id} />
            )}
      </div>
   );
};

export default Task;
