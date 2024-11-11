import { TableRow, TableCell } from "@mui/material";
import type { RequestItems } from "../models/request-items";

interface ItemProps {
   row: RequestItems;
}

export function TableItem({ row }: ItemProps) {
   return (
      <TableRow
         key={row.fecha.toISOString()}
         sx={{
            "&:last-child td, &:last-child th": {
               border: 0,
            },
         }}
      >
         <TableCell component="th" scope="row">
            {row.fecha.toLocaleDateString()}
         </TableCell>
         <TableCell>{row.puesto}</TableCell>
         <TableCell>{row.tipo}</TableCell>
         <TableCell align="right">{row.cantidad}</TableCell>
         <TableCell
            sx={{
               color:
                  row.estado === "En proceso"
                     ? "orange"
                     : row.estado === "Completado"
                     ? "green"
                     : "gray",
            }}
         >
            {row.estado}
         </TableCell>
      </TableRow>
   );
}
