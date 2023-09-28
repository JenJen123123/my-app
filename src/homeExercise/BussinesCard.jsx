import { Container } from "@mui/system";
import {
  Card,
  CardActionArea,
  Divider,
  IconButton,
  Typography,
  Box,
  CardMedia,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";

const BussinesCard = () => {
  const [value, setValue] = useState({
    PhoneNumber: "",
    Address: "",
    CardNumber: "",
  });

  const handleEditInput = () => {
    setValue((currentState) => ({ ...currentState, PhoneNumber: "050-353535" }));
    
  };

  return (
    <Container sx={{ width: 400, height: 100, m: 20 }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80"
          />
        </CardActionArea>
        <Box>
          <Typography sx={{ display: "flex", fontWeight: "bolder", p: 0.5 }}>
            Phone Number:
            <Typography sx={{ pl: "5px" }}>{value.PhoneNumber}</Typography>
          </Typography>
          <Typography sx={{ display: "flex", fontWeight: "bolder", p: 0.5 }}>
            Address:
            <Typography sx={{ pl: "5px" }}>{value.Address}</Typography>
          </Typography>
          <Typography sx={{ display: "flex", fontWeight: "bolder", p: 0.5 }}>
            Card Number:
            <Typography sx={{ pl: "5px" }}><input></input></Typography>
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box>
            <IconButton>
              <CreateIcon onClick={handleEditInput} />
            </IconButton>
            <IconButton sx={{ pl: 2 }}>
              <PhoneIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton sx={{ pl: 2 }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};
export default BussinesCard;
