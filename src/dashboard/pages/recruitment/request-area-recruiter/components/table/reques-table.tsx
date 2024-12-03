import { useEffect, useState } from "react";
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   Pagination,
   Modal,
   Box,
   Typography,
   TextField,
   Grid,
   Button,
} from "@mui/material";
import { TableItem } from "./components/table-item";
import {
   getCallsService,
   getRecruitersAvailableService,
   updateRequestService,
} from "../../services/request-service";
import { Call, CallRes, RecruiterRes } from "../../interfaces/calls-interface";
import { Spinner } from "../../../../../components/spinner/spinner";

// FIX: fix pagination
// FIX: fix refactorization
// FIX: separate logic

export const RequestTable = () => {
   const [calls, setCalls] = useState<CallRes>({} as CallRes);
   const [open, setOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [selectedRequest, setSelectedRequest] = useState<Call>({} as Call);
   const [recruiters, setRecruiters] = useState<RecruiterRes>(
      {} as RecruiterRes
   );

   const stateRequest = [
      {
         id: 1,
         name: "Completado",
      },
      {
         id: 2,
         name: "Pendiente",
      },
      {
         id: 3,
         name: "Finalizado",
      },
   ];

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleChange = (
      event: React.ChangeEvent<HTMLSelectElement>,
      type: string
   ) => {
      setSelectedRequest({
         ...selectedRequest,
         [type]: event.target.value,
      });
   };

   const handleGetCallsService = async () => {
      setIsLoading(true);
      try {
         const { data } = await getCallsService();
         setCalls(data);
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   };

   const handleGetRecruitersAvailableService = async () => {
      const { data } = await getRecruitersAvailableService();
      setRecruiters(data);
   };

   const handleUpdateInformation = async () => {
      const updateValues = {
         observaciones: selectedRequest.observaciones,
         beneficios: "",
         reclutadorSeniorId: +selectedRequest.reclutadorSenior,
         reclutadorGeneralId: +selectedRequest.reclutadorGeneral,
         estado: capitalizeFirstLetter(selectedRequest.estadoSolicitud!),
         fechaPublicacion: selectedRequest.fechaPublicacion,
      };

      const data = await updateRequestService(
         selectedRequest.idConvocatoria,
         updateValues
      );

      console.log(data);
   };

   const handleSelectedRequest = (call: Call) => {
      handleOpen();
      const updateRecruiterSenior = recruiters.reclutadoresSenior.find(
         (recruiter) =>
            recruiter.nombre.includes(call.reclutadorSenior.toString())
      )?.id;
      const updateRecruiterGeneral = recruiters.reclutadoresGeneral.find(
         (recruiter) =>
            recruiter.nombre.includes(call.reclutadorGeneral.toString())
      )?.id;

      setSelectedRequest({
         ...call,
         reclutadorSenior: updateRecruiterSenior!,
         reclutadorGeneral: updateRecruiterGeneral!,
      });
   };

   const capitalizeFirstLetter = (value: string) => {
      if (!value) return ""; // Manejar caso de cadena vacía
      return value.charAt(0).toUpperCase() + value.slice(1);
   };

   useEffect(() => {
      handleGetRecruitersAvailableService();
      handleGetCallsService();
   }, []);

   return (
      <TableContainer
         component={Paper}
         sx={{
            padding: "2rem",
            minWidth: "1400px",
         }}
      >
         <Typography variant="h3" sx={{ marginBottom: "1rem" }} component="h1">
            Solicitudes
         </Typography>

         {isLoading ? (
            <Spinner />
         ) : (
            <>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell align="center">Area</TableCell>
                        <TableCell align="center">Reclutador Senior</TableCell>
                        <TableCell align="center">Reclutador General</TableCell>
                        <TableCell align="center">Subárea</TableCell>
                        <TableCell align="center">Puesto</TableCell>
                        <TableCell align="center">Tipo</TableCell>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Cantidad</TableCell>
                        <TableCell align="center">Restantes</TableCell>
                        <TableCell align="center">Estado</TableCell>
                        <TableCell align="center">Observaciones</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {calls.convocatorias?.map((call) => (
                        <TableItem
                           call={call}
                           key={call.idConvocatoria}
                           handleSelectedRequest={handleSelectedRequest}
                        />
                     ))}
                  </TableBody>
               </Table>

               <Pagination count={calls.pags} />
            </>
         )}

         <Box sx={{ marginTop: 2 }}>
         
         </Box>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 700,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
               }}
            >
               <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h2"
                  sx={{ marginBottom: 4 }}
               >
                  Actualizar Información
               </Typography>

               <Box>
                  <Grid
                     container
                     rowSpacing={3}
                     columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Área
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           value={selectedRequest.nombreArea}
                           disabled
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Reclutador Senior
                        </Typography>

                        <select
                           value={selectedRequest.reclutadorSenior}
                           onChange={(e) => handleChange(e, "reclutadorSenior")}
                           style={{
                              padding: 18.5,
                              background: "transparent",
                              borderRadius: 3,
                              borderColor: "#ccc",
                           }}
                        >
                           {recruiters.reclutadoresSenior?.map((recruiter) => (
                              <option key={recruiter.id} value={recruiter.id}>
                                 {recruiter.nombre}
                              </option>
                           ))}
                        </select>
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Reclutador General
                        </Typography>

                        <select
                           value={selectedRequest.reclutadorGeneral}
                           onChange={(e) =>
                              handleChange(e, "reclutadorGeneral")
                           }
                           style={{
                              padding: 18.5,
                              background: "transparent",
                              borderRadius: 3,
                              borderColor: "#ccc",
                           }}
                        >
                           {recruiters.reclutadoresGeneral?.map((recruiter) => (
                              <option key={recruiter.id} value={recruiter.id}>
                                 {recruiter.nombre}
                              </option>
                           ))}
                        </select>
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Subárea
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           value="Reclutamiento"
                           disabled
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Puesto
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           value={selectedRequest.nombreSubArea}
                           disabled
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Tipo
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           value={selectedRequest.modalidad}
                           disabled
                        />
                     </Grid>

                     {/* Change input date */}
                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Fecha
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           value={selectedRequest.fechaPublicacion}
                           disabled
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Cantidad
                        </Typography>

                        <TextField
                           id="outlined-basic"
                           value={selectedRequest.cantidad}
                           disabled
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Restantes
                        </Typography>

                        <TextField
                           type="number"
                           id="outlined-basic"
                           value={selectedRequest.cantidadRestante}
                           onChange={(e) => {
                              setSelectedRequest({
                                 ...selectedRequest,
                                 cantidadRestante: e.target.value,
                              });
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Estado
                        </Typography>

                        <select
                           value={selectedRequest.estadoSolicitud}
                           onChange={(e) => {
                              setSelectedRequest({
                                 ...selectedRequest,
                                 estadoSolicitud: e.target.value,
                              });
                           }}
                           style={{
                              padding: 18.5,
                              background: "transparent",
                              borderRadius: 3,
                              borderColor: "#ccc",
                           }}
                        >
                           {stateRequest.map((state) => (
                              <option key={state.id} value={state.name}>
                                 {state.name}
                              </option>
                           ))}
                        </select>
                     </Grid>

                     <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Observaciones
                        </Typography>

                        <textarea
                           id="outlined-basic"
                           value={selectedRequest.observaciones}
                           style={{
                              padding: 18.5,
                              background: "transparent",
                              borderRadius: 3,
                              borderColor: "#ccc",
                              fontFamily: "Roboto",
                           }}
                           onChange={(e) =>
                              setSelectedRequest({
                                 ...selectedRequest,
                                 observaciones: e.target.value,
                              })
                           }
                        />
                     </Grid>
                  </Grid>
               </Box>

               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "flex-end",
                     marginTop: 3,
                     gap: 2,
                  }}
               >
                  <Button
                     variant="contained"
                     sx={{ color: "white" }}
                     onClick={() => handleUpdateInformation()}
                  >
                     Guardar
                  </Button>
                  <Button onClick={() => handleClose()}>Cancelar</Button>
               </Box>
            </Box>
         </Modal>
      </TableContainer>
   );
};
