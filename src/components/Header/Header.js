import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {StyledToolBar} from "./styled";
import Button from "@mui/material/Button";
// import goToRecipeList from "../../router/coordinator"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolBar>
        <Link to={'/'}><Button color="inherit" > Cookenu</Button></Link>
         <Link to={'/login'}> <Button color="inherit">Login</Button></Link>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Header;
