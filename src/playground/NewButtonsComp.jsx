import { Box, Button, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import BoltIcon from '@mui/icons-material/Bolt';

const NewButtonsComp = () => {
    return (
        <Fragment>
            <Button variant="contained" color="error" size="large">btn1</Button>
            <Button variant="contained" disabled>Disabled btn</Button>
            <Button startIcon={<BoltIcon/>}>btn</Button>
        </Fragment>
        );
};

export default NewButtonsComp;