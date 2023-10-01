import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <Typography
                    color={isActive ? "warning.main" : "text.primary"}
                    sx={{ p: 2 }}
                >
                    {children}
                </Typography>
            )}
        </NavLink>
    );
};
{
    /* <Link to={to}>
        <Typography color="text.primary" sx={{ p: 2 }}>
          {children}
        </Typography>
      </Link> */
}
export default NavLinkComponent;