import { useState } from "react";
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
   Select,
   MenuItem,
   SelectChangeEvent,
   Button,
} from "@mui/material";
import { rows } from "./mocks/rows";
import { TableItem } from "./components/table-item";

export const RequestTable = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const [recluteirerSenior, setRecluteirerSenior] = useState("");

   const handleChange = (event: SelectChangeEvent) => {
      setRecluteirerSenior(event.target.value);
   };

   return (
      <TableContainer
         component={Paper}
         sx={{
            padding: "2rem",
         }}
      >
         <Typography variant="h3" sx={{ marginBottom: "1rem" }} component="h1">
            Solicitudes
         </Typography>

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
               {rows.map((row) => (
                  <TableItem row={row} key={row.id} handleOpen={handleOpen} />
               ))}
            </TableBody>
         </Table>

         <Pagination count={10} />

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
                           value="Recursos humanos"
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

                        <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={recluteirerSenior}
                           onChange={handleChange}
                        >
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Reclutador General
                        </Typography>

                        <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={recluteirerSenior}
                           onChange={handleChange}
                        >
                           <MenuItem value={10}>Lopez</MenuItem>
                           <MenuItem value={20}>Gaerl</MenuItem>
                           <MenuItem value={30}>Rafael</MenuItem>
                        </Select>
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
                           value="Reclutador General"
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
                           value="Practicante"
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
                           label="Outlined"
                           value="01/10/24"
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

                        <TextField id="outlined-basic" value={2} disabled />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Restantes
                        </Typography>

                        <TextField id="outlined-basic" label="Outlined" />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{ display: "flex", flexDirection: "column" }}
                     >
                        <Typography id="modal-modal-title" component="label">
                           Estado
                        </Typography>

                        <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={recluteirerSenior}
                           onChange={handleChange}
                        >
                           <MenuItem value={10}>Completado</MenuItem>
                           <MenuItem value={20}>Pendiente</MenuItem>
                           <MenuItem value={30}>Finalizado</MenuItem>
                        </Select>
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
                  <Button variant="contained" sx={{ color: "white" }}>
                     Guardar
                  </Button>
                  <Button>Cancelar</Button>
               </Box>
            </Box>
         </Modal>
      </TableContainer>
   );
};
