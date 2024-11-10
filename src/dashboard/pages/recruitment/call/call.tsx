import { useState } from "react";
import {
   Box,
   Container,
   Grid,
   MenuItem,
   OutlinedInput,
   Select,
   SelectChangeEvent,
   Typography,
} from "@mui/material";
import { CardCall } from "../call-board/components/card-call";

export const Call = () => {
   // FIX: Mejorar este campo
   const [area, setArea] = useState("");
   const [subArea, setSubArea] = useState("");

   const handleChangeArea = (event: SelectChangeEvent) => {
      setArea(event.target.value as string);
   };

   const handleChangeSubArea = (event: SelectChangeEvent) => {
      setSubArea(event.target.value as string);
   };

   return (
      <Container sx={{ marginTop: 3 }}>
         <Typography
            variant="h4"
            sx={{ marginBottom: "1rem", fontWeight: "500" }}
            component="h1"
         >
            Convocatorias
         </Typography>

         <Box>
            <Select
               sx={{ width: 200, marginRight: 4 }}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               input={<OutlinedInput label="Name" />}
               label="Area"
               value={area}
               onChange={handleChangeArea}
            >
               <MenuItem value={10}>Area</MenuItem>
               <MenuItem value={20}>Area</MenuItem>
               <MenuItem value={30}>Area</MenuItem>
            </Select>

            <Select
               sx={{ width: 200 }}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={subArea}
               onChange={handleChangeSubArea}
            >
               <MenuItem value={10}>Subarea</MenuItem>
               <MenuItem value={20}>Subarea</MenuItem>
               <MenuItem value={30}>Subarea</MenuItem>
            </Select>
         </Box>

         <Box sx={{ marginTop: 5 }}>
            <Grid container spacing={2}>
               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};
