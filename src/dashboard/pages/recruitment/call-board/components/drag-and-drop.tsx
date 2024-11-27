import { useEffect, useState } from "react";
import {
   Box,
   Button,
   Modal,
   TextField,
   Typography,
   InputLabel,
} from "@mui/material";
import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import {
   DndContext,
   DragOverlay,
   DropAnimation,
   KeyboardSensor,
   MouseSensor,
   closestCorners,
   defaultDropAnimationSideEffects,
   useSensor,
   useSensors,
} from "@dnd-kit/core";
import { ItemDrop } from "./item-drop";
import { ContainerDrop } from "./container-drop";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { getPostulantsService } from "../services/call-board-service";

const dropAnimationConfig: DropAnimation = {
   sideEffects: defaultDropAnimationSideEffects({
      styles: {
         active: {
            opacity: "0.4",
         },
      },
   }),
};

export const DragAndDrop = () => {
   // FIX: Mejorar el manejo de reenderizacion al hacer cada accion
   // FIX: Separar Por componentes
   const {
      activeId,
      containers,
      setContainers,
      findItemTitle,
      handleDragStart,
      handleDragEnd,
      handleDragMove,
      setCurrentContainerId,
      // onAddItem,
   } = useDragAndDrop();
   const [open, setOpen] = useState(false);
   const [openModalInformation, setOpenModalInformation] = useState(false);
   const handleOpen = () => setOpen(!open);
   const handleOpenModalInformation = () =>
      setOpenModalInformation(!openModalInformation);

   const mouseSensor = useSensor(MouseSensor, {
      activationConstraint: {
         distance: 2, //
      },
   });
   const keyboardSensor = useSensor(KeyboardSensor);
   const sensors = useSensors(mouseSensor, keyboardSensor);

   const handleGetPostulantsService = async () => {
      const { data } = await getPostulantsService();

      const updateContainers = containers.map((container) => {
         if (container.title === "Postulaciones") {
            return {
               ...container,
               items: data,
            };
         }
         return container;
      });

      setContainers(updateContainers);
   };

   useEffect(() => {
      handleGetPostulantsService();
   }, []);

   return (
      <Box>
         <Box sx={{ display: "flex" }}>
            <DndContext
               sensors={sensors}
               collisionDetection={closestCorners}
               onDragStart={handleDragStart}
               onDragMove={handleDragMove}
               onDragEnd={handleDragEnd}
            >
               {containers.map((container) => (
                  <ContainerDrop
                     id={container.id}
                     title={container.title}
                     key={container.id}
                     step={container.step}
                     onAddItem={() => {
                        handleOpen();
                        setCurrentContainerId(container.id);
                     }}
                  >
                     <SortableContext
                        items={container.items.map((i) => i.id)}
                        strategy={rectSwappingStrategy}
                     >
                        <Box>
                           {container.items.map((item) => (
                              <ItemDrop
                                 key={item.id}
                                 title={item.email}
                                 id={item.id}
                                 handleOpenModalInformation={
                                    handleOpenModalInformation
                                 }
                              />
                           ))}
                        </Box>
                     </SortableContext>
                  </ContainerDrop>
               ))}
               <DragOverlay
                  adjustScale={false}
                  dropAnimation={dropAnimationConfig}
               >
                  {activeId && (
                     <ItemDrop id={activeId} title={findItemTitle(activeId)} />
                  )}
               </DragOverlay>
            </DndContext>
         </Box>

         <Modal
            open={open}
            onClose={handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
               }}
            >
               <Box className="flex flex-col w-full items-start gap-y-4">
                  <Typography
                     variant="h5"
                     component="h2"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Añadir postulación
                  </Typography>
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Nombre Completo
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Nombre Completo"
                        disabled
                     />
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Correo electronico
                     </InputLabel>

                     <TextField
                        type="email"
                        id="outlined-basic"
                        variant="outlined"
                        value="Correo electronico"
                        disabled
                     />
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">Puesto</InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Puesto"
                        disabled
                     />
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Curriculum Vitae
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        type="file"
                        variant="outlined"
                        disabled
                     />
                  </Box>

                  <Button
                     variant="contained"
                     onClick={() => console.log("onAddItem")}
                     sx={{ width: "100%", color: "white" }}
                  >
                     Añadir
                  </Button>
               </Box>
            </Box>
         </Modal>

         <Modal
            open={openModalInformation}
            onClose={handleOpenModalInformation}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
               }}
            >
               <Box className="flex flex-col w-full items-start gap-y-4">
                  <Typography
                     variant="h5"
                     component="h2"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Información
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 1 }}
                  >
                     [Nombre completo del postulante]
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 1 }}
                  >
                     [Correo electrónico]
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 1 }}
                  >
                     [Puesto]
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 1 }}
                  >
                     [Enlace de CV]
                  </Typography>

                  <Typography
                     variant="h5"
                     component="h2"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Entrevista
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Fecha
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           type="date"
                           disabled
                        />
                     </Box>

                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Hora
                        </Typography>

                        <TextField
                           type="email"
                           id="outlined-basic"
                           variant="outlined"
                           value="00:00"
                           disabled
                        />
                     </Box>
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <Typography id="modal-modal-title" component="label">
                        Puntaje
                     </Typography>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="0 pts."
                        disabled
                     />
                  </Box>

                  <Button
                     variant="contained"
                     onClick={() => console.log("onAddItem")}
                     sx={{ width: "100%", color: "white" }}
                  >
                     Añadir
                  </Button>
               </Box>
            </Box>
         </Modal>
      </Box>
   );
};
