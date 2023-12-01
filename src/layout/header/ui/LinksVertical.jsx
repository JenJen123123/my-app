import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import myLinks, {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
} from "../../myLinks";
import NavLinkComponent from "../NavLinkComponent";
import { useSelector } from "react-redux";
import NavLinkComponentVertical from "../NavLinkComponentVertical";

const LinksVertical = () => {
  const { loggedIn } = useSelector((bigPie) => bigPie.authSlice);
  return (
    <Box>
      {alwaysLinks.map((myItem) => (
        <NavLinkComponentVertical to={myItem.to} key={nextKey()}>
          {myItem.children}
        </NavLinkComponentVertical>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <NavLinkComponentVertical to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponentVertical>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <NavLinkComponentVertical to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponentVertical>
        ))}
    </Box>
  );
};

export default LinksVertical;
