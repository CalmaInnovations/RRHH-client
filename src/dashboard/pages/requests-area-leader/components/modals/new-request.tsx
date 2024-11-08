import {
    Grid,
    Typography,
    TextField,
    InputAdornment,
    OutlinedInput,
    MenuItem,
    Select,
    FormControl,
    Button,
    InputLabel,
} from "@mui/material";
import { useState } from "react";
import "./modals.css";

interface PropsNextModal {
    handleNextModal: () => void;
}

export function NewRequest({ handleNextModal }: PropsNextModal) {
    const [age, setAge] = useState("");
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    marginBlock={4}
                >
                    Nueva Solicitud
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <TextField
                        label="Nombre del puesto"
                        placeholder="Desarrollador Front-End"
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <TextField label="Cantidad" placeholder="2" />
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                    >
                        Tipo de puesto
                    </InputLabel>
                    <Select
                        value={age}
                        onChange={handleChange}
                        label="Tipo de puesto"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <TextField
                        label="Habilidades blandas"
                        placeholder="Separar por comas (,)"
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Conocimientos técnicos
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        label="Conocimientos técnicos"
                        placeholder="Separar por comas (,)"
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <TextField
                        label="Funciones"
                        multiline
                        rows={4}
                        placeholder="Funciones"
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <footer>
                    <Button onClick={handleNextModal} variant="contained">
                        Solicitar
                    </Button>
                    <Button variant="text">Limpiar</Button>
                </footer>
            </Grid>
        </Grid>
    );
}
