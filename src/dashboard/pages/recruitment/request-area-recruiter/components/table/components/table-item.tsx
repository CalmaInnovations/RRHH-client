import {
   Box,
   Typography,
   Grid,
   CardContent,
   Card,
   Avatar,
   Button,
   IconButton,
   ListItemIcon,
   ListItemText,
} from "@mui/material";
import { Solicitudes } from "../../../interfaces/solicitud-interface";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "date-fns";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BorderColorIcon from "@mui/icons-material/BorderColor";
// import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";


interface ItemProps {
   sold: Solicitudes;
   handleOpen: () => void;
}

export const TableItem = ({ sold, handleOpen }: ItemProps) => {
   const formatDate = format(new Date(sold.fechaSolicitud), "dd/MM/yyyy");

   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         {/* item card */}
         <Grid item width={"27rem"}>
            <Card
               sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                  "&:hover": { boxShadow: 6 },
               }}
            >
               <CardContent>
                  {/* contenido del titulo  */}
                  <Box
                     sx={{
                        mb: 4,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                     }}
                  >
                     <Box>
                        <Typography variant="h5" fontWeight={500}>
                           {sold.puesto}
                        </Typography>
                        <Typography
                           fontSize={15}
                           fontWeight={400}
                           color="#7E8299"
                        >
                           Area de Desarrollo de Software
                        </Typography>
                     </Box>
                     <Box>
                        <IconButton
                           aria-controls={open ? "basic-menu" : undefined}
                           aria-haspopup="true"
                           aria-expanded={open ? "true" : undefined}
                           onClick={handleClick}
                        >
                           <MoreVertIcon />
                        </IconButton>

                        <Menu
                           id="basic-menu"
                           anchorEl={anchorEl}
                           open={open}
                           onClose={handleClose}
                           PaperProps={{
                              sx: {
                                 boxShadow:
                                    "0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
                              },
                           }}
                        >
                           <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                 <BorderColorIcon  sx={{fontSize:"18px"}}/>
                              </ListItemIcon>
                              <ListItemText>Editar</ListItemText>

                           </MenuItem>
{/*
                           <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                 <DeleteIcon  sx={{fontSize:"18px"}}/>
                              </ListItemIcon>
                              <ListItemText>Eliminar</ListItemText>

                           </MenuItem> */}
                        </Menu>
                     </Box>
                  </Box>

                  {/* descripcion de la "Funcion" */}
                  <Box>
                     <Typography color="#2E384D">
                        Desarrollar interfaces de usuario, apoyar con el diseño
                        UI, optimización de cargas
                     </Typography>
                  </Box>

                  {/* contenido de los detalles */}
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 1,
                     }}
                  >
                     <Box
                        sx={{
                           mt: 2,
                           display: "flex",
                           gap: 2,
                        }}
                     >
                        <Box
                           sx={{
                              width: 50,
                              height: 50,
                              backgroundColor: "#F3F6F9",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 2,
                              flexShrink: 0,
                           }}
                        >
                           <Avatar
                              src="/public/Static.png"
                              sx={{ width: 33, height: 33 }}
                           />
                        </Box>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                           }}
                        >
                           <Typography fontWeight={500} color="#5BC1E6">
                              Cantidad:
                           </Typography>
                           <Typography color="#9EA5B0">
                              {sold.cantidad}
                           </Typography>
                        </Box>
                     </Box>

                     <Box
                        sx={{
                           mt: 2,
                           display: "flex",
                           gap: 2,
                        }}
                     >
                        <Box
                           sx={{
                              width: 50,
                              height: 50,
                              backgroundColor: "#F3F6F9",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 2,
                              flexShrink: 0,
                           }}
                        >
                           <Avatar
                              src="/public/time.png"
                              sx={{ width: 28, height: 28 }}
                           />
                        </Box>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                           }}
                        >
                           <Typography fontWeight={500} color="#5BC1E6">
                              Fecha:
                           </Typography>
                           <Typography color="#9EA5B0">{formatDate}</Typography>
                        </Box>
                     </Box>

                     <Box
                        sx={{
                           mt: 2,
                           display: "flex",
                           gap: 2,
                           alignItems: "center",
                        }}
                     >
                        <Box
                           sx={{
                              width: 50,
                              height: 50,
                              backgroundColor: "#F3F6F9",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 2,
                              flexShrink: 0,
                           }}
                        >
                           <Avatar
                              src="/public/Group.png"
                              sx={{ width: 33, height: 33 }}
                           />
                        </Box>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                           }}
                        >
                           <Typography fontWeight={500} color="#5BC1E6">
                              Habilidades blandas:
                           </Typography>
                           <Typography color="#9EA5B0">
                              {sold.habilidadesBlandas}
                           </Typography>
                        </Box>
                     </Box>

                     <Box
                        sx={{
                           mt: 2,
                           display: "flex",
                           gap: 2,
                           marginBottom: 1,
                        }}
                     >
                        <Box
                           sx={{
                              width: 50,
                              height: 50,
                              backgroundColor: "#F3F6F9",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 2,
                              flexShrink: 0,
                           }}
                        >
                           <Avatar
                              src="/public/redondo.png"
                              sx={{ width: 33, height: 33 }}
                           />
                        </Box>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                           }}
                        >
                           <Typography fontWeight={500} color="#5BC1E6">
                              Habilidades técnicas:
                           </Typography>
                           <Typography color="#9EA5B0">
                              {sold.conocimientosTecnicos}
                           </Typography>
                        </Box>
                     </Box>
                     <Button
                        variant="contained"
                        sx={{ color: "white",backgroundColor:"#5BC1E6",mt:2}}
                        onClick={() => handleOpen()}
                     >
                        Convertir solicitud
                     </Button>
                  </Box>
               </CardContent>
            </Card>
         </Grid>
      </>
   );
};
