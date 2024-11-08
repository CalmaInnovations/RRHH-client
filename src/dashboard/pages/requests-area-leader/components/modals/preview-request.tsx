import {
    Grid,
    Typography,
    TextField,
    OutlinedInput,
    InputAdornment,
    Button,
} from "@mui/material";
import { useState } from "react";

interface PreviewRequestProps {
    puesto?: string;
    cantidad?: string;
    tipo?: string;
    habilidadesBlandas?: string;
    conocimientosTecnicos?: string;
    funciones?: string;
}

interface OnCloseProps {
    onClose: () => void;
}

export function PreviewRequest({
    puesto,
    cantidad,
    tipo,
    habilidadesBlandas,
    conocimientosTecnicos,
    funciones,
    onClose,
}: PreviewRequestProps & OnCloseProps) {
    const [isEditable, setIsEditable] = useState(false);
    const [savedSuccessfully, setSavedSuccessfully] = useState(false);

    const handleEdit = () => {
        if (isEditable) {
            console.log("Datos guardados:", {
                puesto,
                cantidad,
                tipo,
                habilidadesBlandas,
                conocimientosTecnicos,
                funciones,
            });

            setSavedSuccessfully(true);

            setTimeout(() => {
                setSavedSuccessfully(false);
            }, 2000);
        }
        setIsEditable(!isEditable);
    };

    return (
        <Grid container spacing={4}>
            {savedSuccessfully && (
                <Grid item xs={12}>
                    <Typography variant="body1" color="green" align="center">
                        Guardado exitoso
                    </Typography>
                </Grid>
            )}

            <Grid item xs={12}>
                <Typography variant="h6" component="h2" marginBlock={4}>
                    Solicitud de colaborador
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label="Nombre del puesto"
                    value={puesto}
                    fullWidth
                    InputProps={{
                        readOnly: !isEditable,
                    }}
                    onChange={(e) => console.log(e.target.value)} // Aquí puedes actualizar el estado si lo deseas
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label="Cantidad"
                    value={cantidad}
                    fullWidth
                    InputProps={{
                        readOnly: !isEditable,
                    }}
                    onChange={(e) => console.log(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label="Tipo de puesto"
                    value={tipo}
                    fullWidth
                    InputProps={{
                        readOnly: !isEditable,
                    }}
                    onChange={(e) => console.log(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label="Habilidades blandas"
                    value={habilidadesBlandas}
                    fullWidth
                    InputProps={{
                        readOnly: !isEditable,
                    }}
                    onChange={(e) => console.log(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <OutlinedInput
                    value={conocimientosTecnicos}
                    fullWidth
                    startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                    }
                    label="Conocimientos técnicos"
                    readOnly={!isEditable}
                    onChange={(e) => console.log(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="Funciones"
                    value={funciones}
                    multiline
                    rows={4}
                    fullWidth
                    InputProps={{
                        readOnly: !isEditable,
                    }}
                    onChange={(e) => console.log(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <footer>
                    <Button onClick={handleEdit} variant="contained">
                        {isEditable ? "Guardar" : "Editar"}
                    </Button>
                    <Button variant="text" onClick={onClose}>
                        Cerrar
                    </Button>
                </footer>
            </Grid>
        </Grid>
    );
}
