import { Box, Button, Typography } from "@mui/material";
import { PostulantDataComplete } from "../interface/call.interface";

interface Props {
   selectedCardPostulation: PostulantDataComplete;
   closeModalPreviewCard: () => void;
   setModalEditCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContainerPostulantPreview = ({
   selectedCardPostulation,
   closeModalPreviewCard,
   setModalEditCard,
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
               Nombre: {selectedCardPostulation.postulante.nombres}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Apellido Paterno:{" "}
               {selectedCardPostulation.postulante.apellidoPaterno}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Apellido Paterno:{" "}
               {selectedCardPostulation.postulante.apellidoPaterno}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Apellido Materno:{" "}
               {selectedCardPostulation.postulante.apellidoMaterno}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Correo Electronico: {selectedCardPostulation.postulante.email}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Documento de Identidad : {selectedCardPostulation.postulante.dni}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Telefono: {selectedCardPostulation.postulante.telefono}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Modalidad de Practicas:{" "}
               {selectedCardPostulation.postulante.modalidadPracticas}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Institucion Educativa:{" "}
               {selectedCardPostulation.postulante.institucionEducativa}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Carrera: {selectedCardPostulation.postulante.carrera}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Direccion: {selectedCardPostulation.postulante.direccion}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Pais: {selectedCardPostulation.postulante.pais}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Departamento: {selectedCardPostulation.postulante.departamento}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Currículum vitae: drive.google.com/curriculumvitae.pdf
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
               <Button
                  onClick={() => handleOpenModalEdit()}
                  variant="contained"
                  sx={{ width: "100%", color: "white" }}
               >
                  Editar Postulante
               </Button>

               <Button
                  onClick={() => console.log("handleWithdrawProcessService()")}
                  variant="contained"
                  sx={{
                     width: "100%",
                     color: "white",
                     backgroundColor: "#F63535",
                  }}
               >
                  Retirar del Proceso
               </Button>
            </Box>
         </Box>
      </Box>
   );
};
