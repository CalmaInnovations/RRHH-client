import { SupervisedUserCircleRounded } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth=240 }) => {
  return (
    <Box
    component='nav'
    sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
        variant='permanent'
        open
        sx={{display: {xs: 'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}}}
        >

            <Toolbar>
                <Typography
                variant='h6'
                noWrap
                component='div' 
                >
                    Bryan Chiang
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['PROCESO1', 'PROCESO2', 'PROCESO3', 'PROCESO4'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SupervisedUserCircleRounded/>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))

                }
            </List>
        </Drawer>

    </Box>
  )
}
