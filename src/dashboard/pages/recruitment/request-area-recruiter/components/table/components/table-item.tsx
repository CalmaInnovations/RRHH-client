import { TableRow, TableCell } from "@mui/material";
import { Call } from "../../../interfaces/calls-interface";

interface ItemProps {
   call: Call;
   handleOpen: () => void;
}

export const TableItem = ({ call, handleOpen }: ItemProps) => {
   return (
      <TableRow
         onClick={() => handleOpen()}
         sx={{
            "&:last-child td, &:last-child th": {
               border: 0,
            },
            cursor: "pointer",
         }}
      >
         <TableCell align="center">{call.nombreArea}</TableCell>
         <TableCell align="center">{call.reclutadorSenior}</TableCell>
         <TableCell align="center">{call.reclutadorGeneral}</TableCell>
         <TableCell align="center">{call.nombreSubArea}</TableCell>
         <TableCell align="center">{call.nombrePuesto}</TableCell>
         {/* <TableCell align="center">{call.tipo}</TableCell> */}
         <TableCell component="th" scope="call">
            {call.fechaPublicacion}
         </TableCell>
         <TableCell align="center">{call.cantidad}</TableCell>
         {/* <TableCell align="center">{call.restantes}</TableCell> */}
         <TableCell align="center">{call.estadoSolicitud}</TableCell>
         {/* <TableCell align="center">{call.observaciones}</TableCell> */}
      </TableRow>
   );
};
