import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardComponent = ({
  _id,
  title,
  subTitle,
  phone,
  address,
  img,
  alt,
  cardNumber,
  onDeleteCard,
  onLikeCard,
  onEditCard,
}) => {
  const handlePhoneClick = () => {
    console.log("you clicked on phone btn");
  };

  const handleDeleteCardClick = () => {
    console.log("_id to delete (CardComponent)", _id);
    onDeleteCard(_id);
  };

  const handleLikeCardClick = () => {
    console.log("_id to like (CardComponent)", _id);
    onLikeCard(_id);
  };

  const handleEditCardClick = () => {
    console.log("_id to edit (CardComponent)", _id);
    onLikeCard(_id);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={img} alt={alt} />
      </CardActionArea>
      <CardContent>
        <CardHeader title={title} subheader={subTitle} sx={{ p: 0, mb: 1 }} />
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {address}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Card Number:{" "}
            </Typography>
            {cardNumber}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <IconButton onClick={handlePhoneClick}>
              <PhoneIcon />
            </IconButton>
            <IconButton onClick={handleEditCardClick}>
              <CreateIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={handleDeleteCardClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleLikeCardClick}>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
