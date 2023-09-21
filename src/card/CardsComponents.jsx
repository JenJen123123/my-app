import {
Grid,
} from "@mui/material";
import Cards from "./Card";


const CardsComponents = () => {
    return <Grid container>
        <Grid lg={3}><Cards /></Grid>
        <Grid lg={3}><Cards /></Grid>
        <Grid lg={3}><Cards /></Grid>
    </Grid>
    
    
}

export default CardsComponents;