import { TableRow, TableCell } from "@mui/material";
import type { Row } from "../models/row";

interface ItemProps {
    row: Row;
    handleOpen: () => void;
}

export function TableItem({ row, handleOpen }: ItemProps) {
    return (
        <TableRow
            onClick={() => handleOpen()}
            key={row.fecha.toISOString()}
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
                cursor: "pointer",
            }}
        >
            <TableCell align="center">{row.area}</TableCell>
            <TableCell align="center">{row.reclutador_senior}</TableCell>
            <TableCell align="center">{row.reclutador_general}</TableCell>
            <TableCell align="center">{row.subarea}</TableCell>
            <TableCell align="center">{row.puesto}</TableCell>
            <TableCell align="center">{row.tipo}</TableCell>
            <TableCell component="th" scope="row">
                {row.fecha.toLocaleDateString()}
            </TableCell>
            <TableCell align="center">{row.cantidad}</TableCell>
            <TableCell align="center">{row.restantes}</TableCell>
            <TableCell align="center">{row.estado}</TableCell>
            <TableCell align="center">{row.observaciones}</TableCell>
        </TableRow>
    );
}
