import { Fragment, useState } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import myLinks from "../myLinks";
import NavLinkComponent from "../header/NavLinkComponent";
import { NavLink } from "react-router-dom";
import nextKey from "generate-my-key";
import Links from "../header/ui/Links";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>

      <BottomNavigation sx={{
        mt: 2,
        pt: 0.5,
        boxShadow: 2
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >


        <div>
          <Links />
        </div>


      </BottomNavigation>





    </Fragment>
  );
};

export default FooterComponent;
