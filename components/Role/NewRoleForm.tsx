import { newRole } from "@/utils/actions";
import { TextField, Button, Box, Grid, Paper } from "@mui/material";
import FormControl from "@mui/material/FormControl";
const NewRoleForm = () => {
  return (
    <Box component={Paper} sx={{ padding: "20px" }}>
      <form action={newRole}>
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
                fullWidth
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box textAlign="right">
          <Button variant="contained" type="submit">
            Add Role
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewRoleForm;
