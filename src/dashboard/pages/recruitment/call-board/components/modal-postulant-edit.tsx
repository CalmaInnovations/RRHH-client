import {
   Box,
   Button,
   Grid,
   InputLabel,
   Modal,
   TextField,
   Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Postulant } from "../interface/call-interface";
import { useForm } from "react-hook-form";

interface Props {
   isOpenModal: boolean;
   handleCloseModal: () => void;
   selectedCardPostulation: Postulant;
}

export const ModalPostulantEdit = ({
   isOpenModal,
   handleCloseModal,
   selectedCardPostulation,
}: Props) => {
   // const [area, setArea] = useState("");
   const { register, handleSubmit, reset } = useForm<Postulant>();

   // const handleChangeArea = (event: SelectChangeEvent) => {
   //    setArea(event.target.value as string);
   // };

   const onSubmit = async (data: Postulant) => {
      console.log(data);
      // const response = await editPostulantService(data);
      // console.log(response)

      // Request
      // {
      //    "nombres": "Pedro Edit",
      //    "apellidoPaterno": "Gutiérrez",
      //    "apellidoMaterno": "Vargas",
      //    "email": "pedro.gutierrez@example.com",
      //    "dni": "45678901",
      //    "telefono": "987654324",
      //    "convocatoriaId": 1,
      //    "modalidadPracticas": "Practicante profesional",
      //    "institucionEducativa": "Universidad de Lima",
      //    "carrera": "Ingeniería",
      //    "direccion": "Calle Ficticia 123",
      //    "pais": "Perú",
      //    "departamento": "Lima",
      //    "linkedinUrl": "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
      //    "cartaRecomendacion": "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
      //    "cvUrl": "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
      //    "fotoUrl": "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
      //    "fechaNacimiento": "2024-12-03T03:29:22.920Z"
      //  }
   };

   useEffect(() => {
      if (selectedCardPostulation) {
         reset({
            nombres: selectedCardPostulation?.nombres || "",
            apellidoPaterno: selectedCardPostulation?.apellidoPaterno || "",
            apellidoMaterno: selectedCardPostulation?.apellidoMaterno || "",
            email: selectedCardPostulation?.email || "",
            dni: selectedCardPostulation?.dni || "",
            telefono: selectedCardPostulation?.telefono || "",
            modalidadPracticas:
               selectedCardPostulation?.modalidadPracticas || "",
            institucionEducativa:
               selectedCardPostulation?.institucionEducativa || "",
            carrera: selectedCardPostulation?.carrera || "",
            direccion: selectedCardPostulation?.direccion || "",
            pais: selectedCardPostulation?.pais || "",
            departamento: selectedCardPostulation?.departamento || "",
         });
      }
   }, [selectedCardPostulation, reset]);

   return (
      <Modal
         open={isOpenModal}
         onClose={handleCloseModal}
         aria-labelledby="modal-details-edit-call"
         aria-describedby="modal-details-edit-call-description"
      >
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: 640,
               bgcolor: "#EBF2F5",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
            }}
         >
            <div className="flex flex-col w-full items-start gap-y-4">
               <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                     marginBottom: 2,
                     fontWeight: 500,
                  }}
               >
                  Editar Postulante
               </Typography>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Nombre completo
                        </InputLabel>

                        <TextField
                           {...register("nombres")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Apellido Paterno
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("apellidoPaterno")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Apellido Materno
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("apellidoMaterno")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Correo Electronico
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("email")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Documento de identidad
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("dni")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">Telefono</InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("telefono")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Modalidad de Practicas
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("modalidadPracticas")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Institucion Educativa
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("institucionEducativa")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">Carrera</InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("carrera")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Direccion
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("direccion")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">Pais</InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("pais")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Departamento
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           {...register("departamento")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     <Grid
                        item
                        xs={12}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Curriculum Vitae
                        </InputLabel>

                        <TextField
                           id="outlined-basic"
                           type="file"
                           variant="outlined"
                           // {...register("departamento")}
                           sx={{
                              backgroundColor: "white",
                           }}
                        />
                     </Grid>

                     {/* <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Fecha de inicio
                        </InputLabel>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DateField
                              // defaultValue={dayjs("16-11-2024")}
                              format="DD-MM-YYYY"
                              sx={{
                                 backgroundColor: "white",
                              }}
                           />
                        </LocalizationProvider>
                     </Grid> */}

                     {/* <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           marginBottom: 3,
                        }}
                     >
                        <InputLabel id="modal-modal-title">Genero</InputLabel>

                        <Select
                           sx={{
                              borderRadius: 2,
                           }}
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={area}
                           onChange={handleChangeArea}
                           displayEmpty
                        >
                           <MenuItem value="">Seleccion de genero</MenuItem>
                           <MenuItem value={10}>Masculino</MenuItem>
                           <MenuItem value={20}>Femenino</MenuItem>
                        </Select>
                     </Grid> */}

                     {/* <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           marginBottom: 3,
                        }}
                     >
                        <InputLabel id="modal-modal-title">
                           Fecha de salida
                        </InputLabel>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DateField
                              // defaultValue={dayjs("16-11-2024")}
                              format="DD-MM-YYYY"
                           />
                        </LocalizationProvider>
                     </Grid> */}

                     <Grid item xs={6} sx={{ display: "flex", gap: 2 }}>
                        <Button
                           type="submit"
                           variant="contained"
                           sx={{ width: "100%", color: "white" }}
                        >
                           Guardar
                        </Button>
                     </Grid>

                     <Grid item xs={6}>
                        <Button
                           variant="text"
                           onClick={() => handleCloseModal()}
                           sx={{ width: "100%" }}
                        >
                           Cancelar
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </div>
         </Box>
      </Modal>
   );
};
