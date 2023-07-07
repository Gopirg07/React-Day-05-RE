import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";

export default function AddUser() {
  const { user, setUser } = AppState();
  const history = useHistory();
  const Add = () => {
    const newUser = {
      id,
      name,
      email,
      experience,
      batch,
    };
    console.log(newUser);
    setUser([...user, newUser]);
    history.push("/");
  };

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [batch, setBatch] = useState("");
  return (
    <BaseApp title={"Add A New User"}>
      <div className="text-areas">
        <TextField
          id="outlined-basic"
          label="Id"
          variant="outlined"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="experience"
          variant="outlined"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="batch"
          variant="outlined"
          value={batch}
          onChange={(event) => setBatch(event.target.value)}
        />
        <Button id="addSubmit" variant="contained" onClick={Add}>
          Submit
        </Button>
      </div>
    </BaseApp>
  );
}
