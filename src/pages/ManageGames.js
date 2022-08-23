import { ref, set } from "firebase/database";
import React from "react";
import { database } from "../base";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Container, Stack } from "@mui/material";

const ManageGames = () => {
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
