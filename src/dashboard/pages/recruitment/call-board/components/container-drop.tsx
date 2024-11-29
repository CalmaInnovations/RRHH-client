import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { UniqueIdentifier } from "@dnd-kit/core";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export interface ContainerProps {
   id: UniqueIdentifier;
   children: React.ReactNode;
   title?: string;
   description?: string;
   step?: string;
   onAddItem?: () => void;
}

export const ContainerDrop = ({
   id,
   children,
   title,
   description,
   onAddItem,
   step,
}: ContainerProps) => {
   const {
      attributes,
      setNodeRef,
      // listeners,
      transform,
      transition,
      isDragging,
   } = useSortable({
      id: id,
      data: {
         type: "container",
      },
      transition: {
         duration: 1000, // milliseconds
         easing: "cubic-bezier(0.90, 1, 0.5, 1)",
      },
   });

   return (
      <Box
         {...attributes}
         // {...listeners}
         ref={setNodeRef}
         style={{
            transition,
            transform: CSS.Translate.toString(transform),
         }}
         sx={{
            maxWidth: "300px",
            minWidth: "300px",
            height: "100%",
            marginX: 1,
            p: 2,
            background: "white",
            border: "2px solid #CCCCCC",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            opacity: `${isDragging && "0.5"}`,
         }}
      >
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}
         >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
               <Typography
                  variant="h6"
                  sx={{ color: "#1f2937" }}
                  component="h1"
               >
                  {title}
               </Typography>

               <Typography variant="h2" sx={{ color: "#9ca3af" }} component="p">
                  {description}
               </Typography>
            </Box>
         </Box>

         {children}

         {step === "postulaciones" && (
            <Button
               variant="contained"
               onClick={onAddItem}
               sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
               <AddIcon />
               <Typography>Añadir</Typography>
            </Button>
         )}
      </Box>
   );
};
