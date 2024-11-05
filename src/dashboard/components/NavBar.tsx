import { LogoutOutlined } from "@mui/icons-material";
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: `{sm: ${drawerWidth}px}`,
            }}
        >
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <NavLink to="#" style={{ textDecoration: "none" }}>
                        <Box
                            component="img"
                            src="/public/logoBienvenidaCalma.png"
                            alt="Logo"
                            sx={{
                                width: 100,
                                height: 50,
                                mr: 2,
                                background: "white",
                                borderRadius: 2,
                                padding: 1,
                            }}
                        />
                    </NavLink>
                    <NavLink to="/auth" style={{ textDecoration: "none" }}>
                    <IconButton color="error">
                        <LogoutOutlined />
                    </IconButton>
                    </NavLink>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
