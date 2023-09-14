import { Typography } from "@mui/material";

const SxComponent = () => {
  let n = 15;
  return (
    <Typography sx={{
      backgroundColor: "red",
      color: "yellow",
      border: "1px solid black"
    }}>
      hello sx
    </Typography>
  );
};

export default SxComponent;

/*
    יש לחזור לדף השיעורי בית ולהוסיף עיצוב ע"י
    sx
*/
