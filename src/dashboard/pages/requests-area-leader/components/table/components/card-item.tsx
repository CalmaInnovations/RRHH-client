import {
   Grid,
   Card,
   CardContent,
   Typography,
   Button,
   Box,
   MenuItem,
   Menu,
} from "@mui/material";
import type { RequestItems } from "../../../models/request-items.model";
import { MoreHoriz } from "@mui/icons-material";
import React from "react";

interface ItemProps {
   rows: RequestItems[];
   onPreview: (row: RequestItems) => void;
}

export function TableItem({ rows, onPreview }: ItemProps) {

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
         {rows.map((row) => (
            <Grid item xs={12} md={6} lg={4} key={row.id}>
               <Card>
                  <CardContent
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        minHeight: "560px",
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
                                 row.status === "En proceso"
                                    ? "orange"
                                    : row.status === "Completado"
                                    ? "green"
                                    : "gray",
                           }}
                        >
                           {row.status}
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
                              vertical: "top",
                              horizontal: "left",
                           }}
                           transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                           }}
                        >
                           <MenuItem onClick={() => {onPreview(row); handleClose}}>Editar</MenuItem>
                        </Menu>
                     </Box>
                     <Typography variant="h5" component="div">
                        {row.type}
                     </Typography>
                     <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                        {row.position}
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
                           sx={{ color: "primary.main" }}
                        >
                           Fecha:
                        </Typography>{" "}
                        {row.date?.toLocaleDateString("es-ES")}
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
                           sx={{ color: "primary.main" }}
                        >
                           Cantidad:
                        </Typography>
                        {row.quantity}
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
                              maxWidth: "60%",
                           }}
                        >
                           Habilidades blandas:
                        </Typography>
                        <Typography component="p" sx={{}}>
                           {row.softSkills}
                        </Typography>
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
                           sx={{ color: "primary.main" }}
                        >
                           Conocimiento tecnico:
                        </Typography>
                        {row.technicalKnowledge}
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
                           sx={{ color: "primary.main" }}
                        >
                           Funciones:
                        </Typography>
                        {row.functions}
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   );
}
