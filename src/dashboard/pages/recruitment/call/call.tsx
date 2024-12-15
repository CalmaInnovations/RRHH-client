import { useEffect, useState } from "react";
import {
   Box,
   Grid,
   MenuItem,
   Select,
   SelectChangeEvent,
   Typography,
} from "@mui/material";
import { CardCall } from "../call-board/components/card-call";
import { getCallsService } from "../request-area-recruiter/services/request-service";
import { CallRes } from "../request-area-recruiter/interfaces/calls-interface";
import { Tags } from "../../../components/Tag/components/Tags";
import { Spinner } from "../../../components/spinner/spinner";

export const Call = () => {
   // FIX: Mejorar este campo
   const [area, setArea] = useState("");
   const [subArea, setSubArea] = useState("");
   const [calls, setCalls] = useState<CallRes>({} as CallRes);
   const [isLoading, setIsLoading] = useState(false);

   const handleChangeArea = (event: SelectChangeEvent) => {
      setArea(event.target.value as string);
   };

   const handleChangeSubArea = (event: SelectChangeEvent) => {
      setSubArea(event.target.value as string);
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

   useEffect(() => {
      handleGetCallsService();
   }, []);

   console.log(isLoading);

   return (
      // <Container sx={{ marginTop: 3 }}>
      <Box
         sx={{
            padding: "2rem",
            ml: 6,
         }}
      >
         <Typography
            variant="h4"
            sx={{ marginBottom: "1rem", fontWeight: "600" }}
            component="h1"
         >
            Convocatorias
         </Typography>

         <Tags />

         <Box sx={{ marginTop: 5 }}>
            {isLoading ? (
               <Spinner className="mt-64" />
            ) : (
               <Grid container spacing={2}>
                  {calls.convocatorias?.map((call) => (
                     <Grid key={call.idConvocatoria} item xs={6}>
                        <CardCall call={call} />
                     </Grid>
                  ))}
               </Grid>
            )}
         </Box>
      </Box>
      // </Container>
   );
};
