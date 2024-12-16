import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import { ContainerPostulantPreview } from "./container-postulant-preview";
import { PostulantDataComplete } from "../interface/call.interface";
import { ContainerPreviewPreview } from "./container-entreview-preview";
import { ContainerInductionPreview } from "./container-induction-preview";

interface Props {
   isOpenModal: boolean;
   changeModalPreviewCard: () => void;
   closeModalPreviewCard: () => void;
   value: number;
   handleChange: (event: React.SyntheticEvent, newValue: number) => void;
   selectedCardPostulation: PostulantDataComplete;
   setModalEditCard: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function CustomTabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         className="w-full"
         {...other}
      >
         {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
   );
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export const ModalPreviewCard = ({
   handleChange,
   value,
   isOpenModal,
   closeModalPreviewCard,
   selectedCardPostulation,
   setModalEditCard,
}: Props) => {
   return (
      <Modal open={isOpenModal} onClose={closeModalPreviewCard}>
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
            <Box>
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
               <Box
                  sx={{
                     borderBottom: 1,
                     borderColor: "divider",
                     width: "100%",
                  }}
               >
                  <Tabs
                     value={value}
                     onChange={handleChange}
                     style={{ width: "100%" }}
                     variant="fullWidth"
                  >
                     <Tab label="Postulación" {...a11yProps(0)} />
                     <Tab label="Entrevista" {...a11yProps(1)} />
                     <Tab label="Inducción" {...a11yProps(2)} />
                     <Tab label="Colaborador" {...a11yProps(3)} />
                  </Tabs>
               </Box>

               <CustomTabPanel value={value} index={0}>
                  <ContainerPostulantPreview
                     selectedCardPostulation={selectedCardPostulation}
                     closeModalPreviewCard={closeModalPreviewCard}
                     setModalEditCard={setModalEditCard}
                  />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={1}>
                  <ContainerPreviewPreview
                     selectedCardPostulation={selectedCardPostulation}
                     closeModalPreviewCard={closeModalPreviewCard}
                     setModalEditCard={setModalEditCard}
                  />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={2}>
                  <ContainerInductionPreview
                     selectedCardPostulation={selectedCardPostulation}
                     closeModalPreviewCard={closeModalPreviewCard}
                     setModalEditCard={setModalEditCard}
                  />
               </CustomTabPanel>
               <CustomTabPanel value={value} index={3}>
                  Item Four
               </CustomTabPanel>
            </Box>
         </Box>
      </Modal>
   );
};
