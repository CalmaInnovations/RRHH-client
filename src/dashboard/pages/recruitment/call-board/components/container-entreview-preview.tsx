import { Box, Button, Link, Typography } from "@mui/material";
import { PostulantDataComplete } from "../interface/call.interface";

interface Props {
   selectedCardPostulation: PostulantDataComplete;
   setModalEditCard: React.Dispatch<React.SetStateAction<boolean>>;
   closeModalPreviewCard: () => void;
}

export const ContainerPreviewPreview = ({
   selectedCardPostulation,
   setModalEditCard,
   closeModalPreviewCard,
}: Props) => {
   const handleOpenModalEdit = () => {
      closeModalPreviewCard();
      setModalEditCard(true);
   };

   return (
      <Box>
         <Box>
            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Nombre: {selectedCardPostulation?.postulante.nombres}{" "}
               {selectedCardPostulation?.postulante.apellidoPaterno}{" "}
               {selectedCardPostulation?.postulante.apellidoMaterno}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Correo: {selectedCardPostulation?.postulante.email}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               {/* Apellido Paterno: {selectedCardPostulation.apellidoPaterno} */}
               Puesto: [Puesto]
            </Typography>
            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Enlace de Cv:{" "}
               <Link
                  href={selectedCardPostulation?.postulante.cvUrl}
                  rel="noreferrer"
                  target="_blank"
               >
                  {selectedCardPostulation?.postulante.cvUrl}
               </Link>
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Entrevista: No definido
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               {/* Telefono: {selectedCardPostulation.telefono} */}
               Puntaje: No definido
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Observaciones: No definido
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 2 }}>
               <Button
                  onClick={() => handleOpenModalEdit()}
                  variant="contained"
                  sx={{ width: "100%", color: "white" }}
               >
                  Editar
               </Button>

               <Button
                  onClick={() => console.log("handleWithdrawProcessService()")}
                  variant="outlined"
                  sx={{
                     width: "100%",
                     color: "#35b1f6",
                  }}
               >
                  Enviar corre de entrevista
               </Button>
            </Box>

            <Button
               onClick={() => console.log("Retirar Proceso")}
               variant="contained"
               sx={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#F63535",
               }}
            >
               Retirar Postulante
            </Button>
         </Box>
      </Box>
   );
};
