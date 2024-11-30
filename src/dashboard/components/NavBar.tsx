import {
   AppBar,
   Avatar,
   Box,
   Grid,
   IconButton,
   Menu,
   MenuItem,
   Toolbar,
   Tooltip,
   Typography,
} from "@mui/material";
import React from "react";


const settings = ['Mi Perfil', 'Salir'];



export const NavBar = ({ drawerWidth = 240 }) => {


    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


   return (
      <AppBar
         position="fixed"
         sx={{
            width: '100%',
            ml: `{sm: ${drawerWidth}px}`,
         }}
      >
         <Toolbar>
            <Grid
               container
               direction="row"
               justifyContent="end"
               alignItems="center"
            >
                <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </Grid>
         </Toolbar>
      </AppBar>
   );
};
