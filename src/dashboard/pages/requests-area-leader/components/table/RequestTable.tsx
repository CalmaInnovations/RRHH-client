import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { rows } from "./mocks/rows";
import { TableItem } from "./components/table-item";

export default function RequestTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell align="right">Puesto</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Estado</TableCell>
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
