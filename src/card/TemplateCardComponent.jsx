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

const TemplateCardComponent = ({ title, subTitle, img }) => {
  return (
    <Card
      sx={{
        boxShadow: "2px 2px 5px",
        border: "3px solid grey",
        borderRadius: "8px",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ width: "100%", height: "auto" }}
          component="img"
          image={img}
        ></CardMedia>
        <CardHeader
          title={title}
          subheader={subTitle}
          sx={{ backgroundColor: "grey", color: "black" }}
        />
        <CardContent sx={{ backgroundColor: "lightgrey" }}>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Phone: </span>0543332221
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Address: </span>
            California,USA
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Mail: </span>
            Apple@IOS.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TemplateCardComponent;
