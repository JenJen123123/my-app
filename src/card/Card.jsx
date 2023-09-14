import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    SvgIcon,
    Typography,
    Button,
    IconButton,
    Divider,
} from "@mui/material";

import { Fragment } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Cards = () => {
    return (
        <Box margin="5%" width="20vw" height="60vh">
            <Card Raised>
                <CardMedia
                    component="img"
                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                ></CardMedia>
                <CardHeader title="forth" subheader="subtitle"></CardHeader>
                
                <Box marginLeft="10px" marginRight="10px">
                    <Divider />
                </Box>
                <CardContent>
                    <Box display="Flex">
                        <Typography fontWeight="500">Phone : </Typography>
                        <Typography fontSize="1rem">050-000000</Typography>
                    </Box>
                    <Box display="Flex">
                        <Typography fontWeight="500">Address : </Typography>
                        <Typography fontSize="1rem">Shinkin 3 Tel Aviv</Typography>
                    </Box>
                    <Box display="Flex">
                        <Typography fontWeight="500">Card Number : </Typography>
                        <Typography fontSize="1rem">456457457</Typography>
                    </Box>
                </CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Box paddingLeft="7px">
                        <IconButton><PhoneIcon /></IconButton>
                        <IconButton><CreateIcon /></IconButton>
                    </Box>
                    <Box paddingRight="7px">
                        <IconButton><DeleteIcon /></IconButton>
                        <IconButton><FavoriteIcon /></IconButton>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default Cards;