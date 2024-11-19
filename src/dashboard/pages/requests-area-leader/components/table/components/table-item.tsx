import { TableRow, TableCell } from "@mui/material";
import type { RequestItems } from "../../../models/request-items.model";

interface ItemProps {
   row: RequestItems;
   onPreview: (row: RequestItems) => void;
}

export function TableItem({ row, onPreview }: ItemProps) {
   return (
      <TableRow
         key={row.date?.toISOString()}
         sx={{
            "&:last-child td, &:last-child th": {
               border: 0,
            },
            cursor: "pointer",
         }}
         onClick={() => onPreview(row)}
      >
         <TableCell component="th" scope="row">
            {row.date?.toLocaleDateString("es-ES")}
         </TableCell>
         <TableCell>{row.position}</TableCell>
         <TableCell>{row.type}</TableCell>
         <TableCell align="right">{row.quantity}</TableCell>
         <TableCell
            sx={{
               color:
                  row.status === "En proceso"
                     ? "orange"
                     : row.status === "Completado"
                     ? "green"
                     : "gray",
            }}
         >
            {row.status}
         </TableCell>
      </TableRow>
   );
}
