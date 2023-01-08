import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ButtonGroup
        variant='contained'
        aria-label='outlined primary button group'
      >
        <Button component={RouterLink} to='/'>
          Home
        </Button>
        <Button component={RouterLink} to='/creategame'>
          Create Game
        </Button>

        <Button component={RouterLink} to='/managegames'>
          Manage Games
        </Button>
        <Button component={RouterLink} to='/overlay' target='_blank'>
          Overlay (New Window)
        </Button>
      </ButtonGroup>
      <Button onClick={handleSignOut}>Logout</Button>
    </div>
  );
};

export default NavBar;
