import { useEffect, useState } from "react";
import {
   Box,
   Grid,
   Typography,
   Button,
} from "@mui/material";
import { CardCall } from "../call-board/components/card-call";
import { getCallsService } from "../request-area-recruiter/services/request-service";
import { CallRes } from "../request-area-recruiter/interfaces/calls-interface";
import { Tags } from "../../../components/Tag/components/Tags";
import { Spinner } from "../../../components/spinner/spinner";

export const Call = () => {
   const [area, setArea] = useState<string | null>(null);
   const [calls, setCalls] = useState<CallRes>({} as CallRes);
   const [isLoading, setIsLoading] = useState(false);

   const handleChangeArea = (selected: string | null) => {
      setArea(selected);
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

   const areas = ["Todos", "Tecnología", "Recursos Humanos", "Marketing", "Control y calidad"];

   return (
      <Box sx={{ padding: "2rem", ml: 6 }}>
         <Typography variant="h3" sx={{ marginBottom: "1rem"  }}>
            Convocatorias
         </Typography>

         <Tags />

         {/* Filtros de Área */}
         <Box sx={{ display: "flex", gap: 2, marginTop: "2rem", marginBottom: "2rem" }}>
            {areas.map((category) => (
               <Button
                  key={category}
                  variant="contained"
                  onClick={() => handleChangeArea(category === "Todos" ? null : category)}
                  sx={{
                     backgroundColor: area === category || (category === "Todos" && !area) ? "#5BC1E6" : "white",
                     color: area === category || (category === "Todos" && !area) ? "white" : "black",
                     border: "1px solid #5BC1E6",
                     "&:hover": {
                        backgroundColor: area === category || (category === "Todos" && !area) ? "#" : "#",
                     },
                  }}
               >
                  {category}
               </Button>
            ))}
         </Box>

         <Box sx={{ marginTop: 5 }}>
            {isLoading ? (
               <Spinner className="mt-64" />
            ) : (
               <Grid container spacing={2}>
                  {calls.convocatorias?.map((call) => (
                     <Grid key={call.idConvocatoria} item xs={6}>
                        <CardCall call={call} handleGetCallsService={handleGetCallsService} />
                     </Grid>
                  ))}
               </Grid>
            )}
         </Box>
      </Box>
   );
};
