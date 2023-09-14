import { Box, Button, Divider, Typography } from "@mui/material";
import { Fragment } from "react";

const ButtonsComponent = () => {
  return (
    <Fragment>
      <Divider>Buttons</Divider>
      <Box display="flex" justifyContent="space-evenly">
        <Button variant="contained">contained</Button>
        <Button variant="outlined" color="success">outlined</Button>
        <Button>text</Button>
      </Box>
      <Divider>Disabled buttons</Divider>
      <Box display="flex" justifyContent="space-evenly">
        <Button variant="contained" disabled>
          disabled contained button
        </Button>
        <Button variant="outlined" disabled>
          disabled outlined button
        </Button>
        <Button disabled>disabled text button</Button>
      </Box>

      <Typography>
        TEST
      </Typography>

    </Fragment>
  );
};

export default ButtonsComponent;