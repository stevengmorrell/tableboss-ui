import { ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../base";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ManageGames = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        name='selection'
        default=''
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} required>
            <MenuItem value='Adeptus Mechanicus'>Adeptus Mechanicus</MenuItem>
            <MenuItem value='Salamanders'>Salamanders</MenuItem>
            <MenuItem value='Grey Wolves'>Grey Wolves</MenuItem>
            <MenuItem value='Orks'>Orks</MenuItem>
          </Select>
        )}
      />
      <Button variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ManageGames;

// const [name, setName] = useState(null);
// useEffect(() => {
//   set(ref(database, "users/1"), {
//     name: name,
//   });
// });

// <div>
// <h1>Manage Games</h1>
// <input
//   name='name'
//   type='text'
//   onChange={(e) => setName(e.target.value)}
// />
// </div>
