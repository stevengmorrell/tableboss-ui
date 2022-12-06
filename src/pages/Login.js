import { Box, Button, Container } from "@mui/material";

import React from "react";
import { signInWithGoogle } from "../base";

const Login = () => {
  return (
    <Container>
      <Box>
        <h1>Login</h1>
        <Button onClick={signInWithGoogle}>Google Sign In</Button>
      </Box>
    </Container>
  );
};

export default Login;
