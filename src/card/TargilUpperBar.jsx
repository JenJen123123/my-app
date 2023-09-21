import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    SvgIcon,
    Divider,
    Grid,
} from "@mui/material";

import Cards from "./Card";
import { Fragment } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function TargilUpperBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>


            <Grid container>
                <Grid lg={4}><Cards /></Grid>
                <Grid lg={4}><Cards /></Grid>
                <Grid lg={4}><Cards /></Grid>
            </Grid>

            <Typography variant="h1" textAlign="center" margin="40px">Header</Typography>

            <Typography variant="h6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum architecto nemo unde ad numquam quod, sed rem sequi odio ut est laboriosam repellendus commodi vel, officia delectus quisquam voluptatibus suscipit molestias rerum quis, consequatur hic dolore. Beatae possimus aperiam architecto qui odit tenetur inventore quisquam, voluptate et distinctio omnis recusandae odio laborum tempora culpa placeat modi laudantium corporis nobis quis exercitationem! Ipsum debitis itaque voluptate sequi fugiat animi doloremque libero. Fuga voluptatem, aspernatur enim iusto, maxime est alias odit quam modi beatae qui sed dolorum neque facilis molestias nemo. Perferendis et maxime dolores quisquam. Tenetur non enim magnam esse at?</Typography>

            
            <BottomNavigation sx={{ backgroundColor:"#9ec3ff"}}>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Nearby" icon={<PhoneIcon />} />
            </BottomNavigation>
        </Box>
    );
}