import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      <Box>
        <h1>Tabletop Templates</h1>
        <GoogleButton onClick={handleGoogleSignIn} />
      </Box>
    </Container>
  );
};

export default Login;
