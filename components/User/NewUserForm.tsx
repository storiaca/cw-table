"use client";
import { useState, useEffect, memo } from "react";

import { newUser } from "@/utils/actions";
import { RoleType } from "@/app/roles/page";
import { TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const NewUserForm = () => {
  const [roles, setRoles] = useState<RoleType | null>([]);
  const [roleSelect, setRoleSelect] = useState<string | null>("");

  const handleFetchRoles = async () => {
    const response = await fetch("http://localhost:3000/api/roles");
    const dataRoles = await response.json();

    setRoles(dataRoles.data);
  };

  useEffect(() => {
    handleFetchRoles();
  }, []);

  return (
    <form action={newUser}>
      <FormControl>
        <TextField
          id="firstName"
          type="text"
          variant="outlined"
          color="secondary"
          name="firstName"
          label="First Name"
          fullWidth
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="lastName"
          type="text"
          variant="outlined"
          color="secondary"
          name="lastName"
          label="Last Name"
          fullWidth
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="email"
          type="email"
          variant="outlined"
          color="secondary"
          name="email"
          label="E-mail"
          fullWidth
          required
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="role">Role</InputLabel>
        <Select
          labelId="role"
          id="role"
          value={roleSelect}
          name="roleName"
          label="Role"
          onChange={(e) => setRoleSelect(e.target.value)}
          required
        >
          {roles &&
            roles.map((role) => (
              <MenuItem key={role.id} value={role.roleName}>
                {role.roleName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Button variant="contained" type="submit">
        Add Role
      </Button>
    </form>
  );
};

export default memo(NewUserForm);
