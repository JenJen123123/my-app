import {
    Container,
    Box,
    Typography,
    IconButton,
    Divider,
    Card,
    CardActionArea,
    CardMedia,
    CardHeader,
    CardContent,
    Grid,
} from "@mui/material";

const Animals = ({ name }) => {
    return (
        <Typography>{name}</Typography>
    );
};

export default Animals;
