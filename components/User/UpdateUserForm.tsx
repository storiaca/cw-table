"use client";
import { useState, useEffect } from "react";

import { UserProps } from "./UserList";
import { updateUser } from "@/utils/actions";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { RoleType } from "@/app/roles/page";

const UpdateUserForm = ({ user }: UserProps) => {
  const [roles, setRoles] = useState<RoleType | null>([]);
  const [firstName, setFirstName] = useState<string>(user.firstName);
  const [lastName, setLastName] = useState<string>(user.lastName);
  const [email, seEmail] = useState<string>(user.email);
  const [roleName, setRoleName] = useState<string>(user.roleName);

  const handleFetchRoles = async () => {
    const response = await fetch("http://localhost:3000/api/roles");
    const dataRoles = await response.json();

    setRoles(dataRoles.data);
  };

  useEffect(() => {
    handleFetchRoles();
  }, []);

  return (
    <Box component={Paper} sx={{ padding: "20px" }}>
      <form
        action={(e) =>
          updateUser(user.id, firstName, lastName, email, roleName)
        }
      >
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="firstName"
              type="text"
              variant="outlined"
              color="secondary"
              name="firstName"
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="lastName"
              type="text"
              variant="outlined"
              color="secondary"
              name="lastName"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              color="secondary"
              name="email"
              label="E-mail"
              onChange={(e) => seEmail(e.target.value)}
              value={email}
              fullWidth
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="role"
              value={roleName}
              name="roleName"
              label="Role"
              onChange={(e) => setRoleName(e.target.value)}
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
        </Grid>
        <Box textAlign="right">
          <Button variant="contained" type="submit">
            Update User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateUserForm;
