import { onValue, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Container, Stack } from "@mui/material";
import { UserAuth } from "../context/AuthContext";

// What does this component actually do?

// 1. Select one of your Active Games
// 2. UI populates details of your active games and options for all dropdowns etc
// 3. URL with copy button is generated for the overlay
// 3. User can update all details of game
// 4. User can submit change to game

const ManageGames = () => {
  const { user } = UserAuth();

  const [gameData, setGameData] = useState({});

  const userRef = ref(database, `/games/${user.uid}`);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      setGameData(snapshot.val());
    });
    console.log("Got game data");
  }, []);

  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    set(ref(database, "users/1"), {
      name: data.p1Name,
      army: data.p1Army,
    });

    set(ref(database, "users/2"), {
      name: data.p2Name,
      army: data.p2Army,
    });
  };

  return (
    <Container
      sx={{
        mt: "20px",
      }}
    >
      <p>
        http://localhost:3000/overlay?u=ju7dwAH2ZXbaWSoXYPJBcEHPUz82&g=6fe5d29a-0a2f-46c7-9b6c-04ca831ad36b
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Controller
            name={"p1Name"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                required
                onChange={onChange}
                value={value}
                label={"Player One Name"}
              />
            )}
          />
          <Controller
            control={control}
            name='p1Army'
            default=''
            render={({ field: { onChange, value } }) => (
              <Select onChange={onChange} value={value} required>
                <MenuItem value='Adeptus Mechanicus'>
                  Adeptus Mechanicus
                </MenuItem>
                <MenuItem value='Salamanders'>Salamanders</MenuItem>
                <MenuItem value='Grey Wolves'>Grey Wolves</MenuItem>
                <MenuItem value='Orks'>Orks</MenuItem>
              </Select>
            )}
          />
          <Controller
            name={"p2Name"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                required
                onChange={onChange}
                value={value}
                label={"Player Two Name"}
              />
            )}
          />
          <Controller
            control={control}
            name='p2Army'
            default=''
            render={({ field: { onChange, value } }) => (
              <Select onChange={onChange} value={value} required>
                <MenuItem value='Adeptus Mechanicus'>
                  Adeptus Mechanicus
                </MenuItem>
                <MenuItem value='Salamanders'>Salamanders</MenuItem>
                <MenuItem value='Grey Wolves'>Grey Wolves</MenuItem>
                <MenuItem value='Orks'>Orks</MenuItem>
              </Select>
            )}
          />
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default ManageGames;
