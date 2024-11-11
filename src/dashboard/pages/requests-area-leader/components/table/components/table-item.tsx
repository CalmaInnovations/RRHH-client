import { TableRow, TableCell } from "@mui/material";
import type { RequestItems } from "../models/request-items";

interface ItemProps {
   row: RequestItems;
}

export function TableItem({ row }: ItemProps) {
   return (
      <TableRow
         key={row.date.toISOString()}
         sx={{
            "&:last-child td, &:last-child th": {
               border: 0,
            },
         }}
      >
         <TableCell component="th" scope="row">
            {row.date.toLocaleDateString()}
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
