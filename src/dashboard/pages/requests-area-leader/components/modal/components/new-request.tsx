import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

export function NewRequest() {
    const [age, setAge] = useState("");
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                        label="Nombre del puesto"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start"></InputAdornment>
                                ),
                            },
                        }}
                        placeholder="Desarrollador Front-End"
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                        label="Cantidad"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start"></InputAdornment>
                                ),
                            },
                        }}
                        placeholder="2"
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel id="demo-simple-select-label">
                        Tipo de puesto
                    </InputLabel>
                    <Select
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        value={age}
                        onChange={handleChange}
                        placeholder="Seleccionar"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                        label="Habilidades blandas"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start"></InputAdornment>
                                ),
                            },
                        }}
                        placeholder="Separar por comas (,)"
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 2, width: 465 }}>
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

                <FormControl fullWidth sx={{ m: 2, width: 465 }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Funciones"
                        multiline
                        rows={4}
                        placeholder="Funciones"
                    />
                </FormControl>
            </div>
        </Box>
    );
}
