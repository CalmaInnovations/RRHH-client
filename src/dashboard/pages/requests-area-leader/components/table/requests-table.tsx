import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
} from "@mui/material";
import { rows } from "./mocks/request-items";
import { TableItem } from "./components/table-item";

export default function RequestsTable() {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell sx={{ color: "primary.main", fontWeight: "bold" }}>
                     Fecha
                  </TableCell>
                  <TableCell sx={{ color: "primary.main", fontWeight: "bold" }}>
                     Puesto
                  </TableCell>
                  <TableCell sx={{ color: "primary.main", fontWeight: "bold" }}>
                     Tipo
                  </TableCell>
                  <TableCell
                     sx={{ color: "primary.main", fontWeight: "bold" }}
                     align="right"
                  >
                     Cantidad
                  </TableCell>
                  <TableCell sx={{ color: "primary.main", fontWeight: "bold" }}>
                     Estado
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableItem row={row} key={row.id} />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
