import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export interface Row {
    fecha: Date;
    puesto: string;
    tipo: "practicante" | "voluntario";
    cantidad: number;
    estado: "Pendiente" | "En proceso" | "Completado";
}

function createData(data: Row): Row {
    return data;
}

const rows: Row[] = [
    createData({
        fecha: new Date("2023-10-01"),
        puesto: "Developer",
        tipo: "practicante",
        cantidad: 5,
        estado: "Pendiente",
    }),
    createData({
        fecha: new Date("2023-11-15"),
        puesto: "Designer",
        tipo: "voluntario",
        cantidad: 3,
        estado: "En proceso",
    }),
    createData({
        fecha: new Date("2023-12-05"),
        puesto: "Project Manager",
        tipo: "practicante",
        cantidad: 2,
        estado: "Completado",
    }),
    createData({
        fecha: new Date("2024-01-10"),
        puesto: "QA Tester",
        tipo: "voluntario",
        cantidad: 4,
        estado: "Pendiente",
    }),
    createData({
        fecha: new Date("2024-02-20"),
        puesto: "Support",
        tipo: "practicante",
        cantidad: 1,
        estado: "En proceso",
    }),
];

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
                        <TableItem row={row} key={row.name} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

interface ItemsProps {
    row: Row;
}

export function TableItem({ row }: ItemsProps) {
    return (
        <TableRow
            key={row.name}
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
    );
}
