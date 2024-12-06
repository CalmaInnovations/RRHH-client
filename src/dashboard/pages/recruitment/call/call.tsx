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

         <Box>
            <Select
               sx={{
                  width: 200,
                  marginRight: 4,
                  color: "#0A99E6",
                  fontWeight: 500,
                  borderRadius: 2,
               }}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={area}
               onChange={handleChangeArea}
               displayEmpty
            >
               <MenuItem value="">Área</MenuItem>
               <MenuItem value={10}>Área</MenuItem>
            </Select>

            <Select
               sx={{
                  width: 200,
                  marginRight: 4,
                  color: "#0A99E6",
                  fontWeight: 500,
                  borderRadius: 2,
               }}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={subArea}
               onChange={handleChangeSubArea}
               displayEmpty
            >
               <MenuItem value="">Subárea</MenuItem>
               <MenuItem value={20}>Subárea</MenuItem>
               <MenuItem value={30}>Subárea</MenuItem>
            </Select>
         </Box>

         <Box sx={{ marginTop: 5 }}>
            <Grid container spacing={2}>
               {calls.convocatorias?.map((call) => (
                  <Grid key={call.idConvocatoria} item xs={6}>
                     <CardCall call={call} />

                  </Grid>
               ))}
               {calls.convocatorias?.map((call) => (
                  <Grid key={call.idConvocatoria} item xs={6}>
                     <CardCall call={call} />

                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
      // </Container>
   );
};
