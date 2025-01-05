import {
   Grid,
   Card,
   CardContent,
   Typography,
   Button,
   Box,
   MenuItem,
   Menu,
   Paper,
} from "@mui/material";
import type { Collaborator } from "../../../interface/request-items.model";
import { MoreHoriz } from "@mui/icons-material";
import React from "react";

interface ItemProps {
   cards: Collaborator[];
   onPreview: (row: Collaborator) => void;
}

export function CardsItem({ cards, onPreview }: ItemProps) {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const open = Boolean(anchorEl);

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <Grid
         container
         spacing={2}
         sx={{ mt: "10px", overflow: "hidden", boxSizing: "border-box" }}
      >
         {cards.map((card) => (
            <Grid key={card.id} item xs={12} md={6} lg={4} height={"70vh"}>
               <Paper elevation={4}>
                  <Card sx={{ minHeight: "500px" }}>
                     <CardContent
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           gap: "10px",
                           minHeight: "520px",
                           boxSizing: "border-box",
                        }}
                     >
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignContent: "center",
                              alignItems: "center",
                           }}
                        >
                           <Typography
                              gutterBottom
                              sx={{
                                 fontSize: 14,
                                 color:
                                    card.estado === "En proceso"
                                       ? "orange"
                                       : card.estado === "Completado"
                                       ? "green"
                                       : "gray",
                              }}
                           >
                              {card.estado}
                           </Typography>
                           <Button
                              id="demo-positioned-button"
                              aria-controls={
                                 open ? "demo-positioned-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              onClick={handleClick}
                           >
                              <MoreHoriz />
                           </Button>
                           <Menu
                              id="demo-positioned-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              anchorOrigin={{
                                 vertical: "bottom",
                                 horizontal: "left",
                              }}
                              transformOrigin={{
                                 vertical: "top",
                                 horizontal: "left",
                              }}
                              PaperProps={{
                                 elevation: 2,
                              }}
                           >
                              <MenuItem
                                 onClick={() => {
                                    onPreview(card);
                                    handleClose();
                                 }}
                              >
                                 Editar
                              </MenuItem>
                           </Menu>
                        </Box>
                        <Typography
                           sx={{ color: "text.secondary" }}
                           variant="h6"
                           component="div"
                        >
                           {card.tipoModalidad}
                        </Typography>
                        <Typography
                           variant="h5"
                           sx={{ mb: 1.5, fontWeight: "bold" }}
                        >
                           {card.puesto}
                        </Typography>
                        <Typography
                           variant="body2"
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                           }}
                        >
                           <Typography
                              component="span"
                              sx={{ color: "primary.main", fontWeight: "600" }}
                           >
                              Fecha:
                           </Typography>{" "}
                           {card.fechaSolicitud
                              ? new Date(
                                   card?.fechaSolicitud
                                ).toLocaleDateString("es-ES")
                              : "Fecha no disponible"}
                        </Typography>
                        <Typography
                           variant="body2"
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                           }}
                        >
                           <Typography
                              component="span"
                              sx={{ color: "primary.main", fontWeight: "600" }}
                           >
                              Cantidad:
                           </Typography>
                           {card.cantidad}
                        </Typography>
                        <Typography
                           variant="body2"
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                           }}
                        >
                           <Typography
                              component="span"
                              sx={{
                                 color: "primary.main",
                                 fontWeight: "600",
                              }}
                           >
                              Habilidades blandas:
                           </Typography>
                           {card.habilidadesBlandas}
                        </Typography>
                        <Typography
                           variant="body2"
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                           }}
                        >
                           <Typography
                              component="span"
                              sx={{ color: "primary.main", fontWeight: "600" }}
                           >
                              Conocimiento tecnico:
                           </Typography>
                           {card.conocimientosTecnicos}
                        </Typography>
                        <Typography
                           variant="body2"
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                           }}
                        >
                           <Typography
                              component="span"
                              sx={{ color: "primary.main", fontWeight: "600" }}
                           >
                              Observaciones:
                           </Typography>
                           {card.observaciones}
                        </Typography>
                     </CardContent>
                  </Card>
               </Paper>
            </Grid>
         ))}
      </Grid>
   );
}
