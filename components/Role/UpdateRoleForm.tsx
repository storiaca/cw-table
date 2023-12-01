"use client";
import { useState } from "react";

import { RoleProps } from "./RoleList";
import { updateRole } from "@/utils/actions";
import { TextField, Button, Box, Grid, Paper } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const UpdateRoleForm = ({ role }: RoleProps) => {
  const [nameRole, setNameRole] = useState<string>(role.roleName);
  const [descriptionRole, setDescriptionRole] = useState<string>(
    role.description
  );

  return (
    <Box component={Paper} sx={{ padding: "20px" }}>
      <form action={() => updateRole(role.id, nameRole, descriptionRole)}>
        <Grid spacing={1}>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                id="roleName"
                type="text"
                variant="outlined"
                color="secondary"
                name="roleName"
                label="Role Name"
                value={nameRole}
                onChange={(e) => setNameRole(e.target.value)}
                fullWidth
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                id="description"
                type="text"
                variant="outlined"
                color="secondary"
                name="description"
                label="Description"
                value={descriptionRole}
                onChange={(e) => setDescriptionRole(e.target.value)}
                fullWidth
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box textAlign="right">
          <Button variant="contained" type="submit">
            Update Role
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateRoleForm;
