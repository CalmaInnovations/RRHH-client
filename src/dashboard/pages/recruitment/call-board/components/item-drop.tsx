import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from "@mui/material";
import { Postulant } from "../interface/call-interface";

type ItemsType = {
   id: UniqueIdentifier;
   title?: string;
   item?: Postulant;
   changeModalPreviewCard?: (newValue: number) => void;
   handleGetDataPostulantService?: (id_postulant: number) => Promise<void>;
};

export const ItemDrop = ({
   id,
   item,
   changeModalPreviewCard,
   handleGetDataPostulantService,
}: ItemsType) => {
   const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
   } = useSortable({
      id: id,
      data: {
         type: "item",
      },
      transition: {
         duration: 700, // milliseconds
         easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
   });

   const style = {
      transform: CSS.Transform.toString(transform),
      transition,
   };

   return (
      <Box
         onClick={async () => {
            if (!item) {
               return;
            }

            if (item.estado === "Postulante") {
               changeModalPreviewCard!(0);
            } else if (item.estado === "Entrevista") {
               changeModalPreviewCard!(1);
            } else if (item.estado === "Induccion general") {
               changeModalPreviewCard!(2);
            }

            await handleGetDataPostulantService!(item.id!);
         }}
         ref={setNodeRef}
         {...attributes}
         {...listeners}
         style={style}
         sx={{
            paddingX: 1,
            background: "#EBF8FE",
            padding: 2,
            borderRadius: 2,
            cursor: "grab",
            marginBottom: 1,
            opacity: `${isDragging && "0"}`,
         }}
      >
         <Box sx={{ fontSize: 20, fontWeight: 500 }}>
            {item?.modalidadPracticas}
         </Box>
         <Box sx={{ fontSize: 13, color: "666666" }}>
            {`${item?.nombres} ${item?.apellidoPaterno} ${item?.apellidoMaterno}`}
         </Box>
      </Box>
   );
};
