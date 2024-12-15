import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import { PostulantDataComplete } from "../interface/call.interface";
import { ContainerPostulationEdit } from "./container-postulation-edit";
import { ContainerEntreviewEdit } from "./container-entreview-edit";
import { ContainerInductionEdit } from "./containe-induction-edit";
import { ContainerColaborationEdit } from "./container-colaboration-edit";

interface Props {
   isOpenModal: boolean;
   changeModalEditCard: () => void;
   closeModalEditCard: () => void;
   value: number;
   handleChange: (event: React.SyntheticEvent, newValue: number) => void;
   selectedCardPostulation: PostulantDataComplete;
}

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function CustomTabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <Box
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         sx={{}}
         {...other}
      >
         {value === index && <Box>{children}</Box>}
      </Box>
   );
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export const ModalEditCard = ({
   handleChange,
   value,
   isOpenModal,
   closeModalEditCard,
   selectedCardPostulation,
}: Props) => {
   return (
      <Modal open={isOpenModal} onClose={closeModalEditCard}>
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               // width: 480,
               bgcolor: "#EBF2F5",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
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
                  Formulario
               </Typography>
               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                     value={value}
                     onChange={handleChange}
                     aria-label="basic tabs example"
                  >
                     <Tab label="Postulación" {...a11yProps(0)} />
                     <Tab label="Entrevista" {...a11yProps(1)} />
                     <Tab label="Inducción" {...a11yProps(2)} />
                     <Tab label="Colaborador" {...a11yProps(3)} />
                  </Tabs>
               </Box>

               <CustomTabPanel value={value} index={0}>
                  <ContainerPostulationEdit
                     selectedCardPostulation={selectedCardPostulation}
                     closeModalEditCard={closeModalEditCard}
                  />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={1}>
                  <ContainerEntreviewEdit
                     closeModalEditCard={closeModalEditCard}
                  />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={2}>
                  <ContainerInductionEdit
                     closeModalEditCard={closeModalEditCard}
                  />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={3}>
                  <ContainerColaborationEdit
                     closeModalEditCard={closeModalEditCard}
                  />
               </CustomTabPanel>
            </Box>
         </Box>
      </Modal>
   );
};
