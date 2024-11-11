import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from "@mui/material";

type ItemsType = {
   id: UniqueIdentifier;
   title: string;
   handleOpenModalInformation?: () => void;
};

export const ItemDrop = ({
   id,
   title,
   handleOpenModalInformation,
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
         onClick={() => handleOpenModalInformation!()}
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
         <div className="flex items-center justify-between">{title}</div>
      </Box>
   );
};